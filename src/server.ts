import dotenv from "dotenv";
dotenv.config();

import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from "apollo-server-core";
import type { CorsOptions } from "cors";
import corsMiddleware from "cors";
import Logger from "./utils/Logger.js";
import { LoggerPlugin } from "./utils/AppPlugin.js";

import express from "express";
import http from "http";

import dataSources from "./datasources/index.js";
import resolvers from "./resolvers/index.js";
import schema from "./schema/schema.js";

const port = process.env.PORT;

if (!port) {
  throw new Error("Port value not found in env.");
}

const isProduction = process.env.NODE_ENV === "production";
const plugins = [LoggerPlugin];

plugins.push(
  isProduction
    ? ApolloServerPluginLandingPageDisabled()
    : ApolloServerPluginLandingPageGraphQLPlayground({})
);

const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
} as CorsOptions;

const app = express();
const httpServer = http.createServer(app);
app.disable("x-powered-by");

const router = express.Router();
router.use("/", corsMiddleware(corsOptions));

const server = new ApolloServer({
  csrfPrevention: true,
  debug: !isProduction,
  typeDefs: schema,
  resolvers,
  plugins,
  dataSources,
  context: ({ req, res }) => ({
    req,
    res,
  }),
  introspection: !isProduction,
});

await server.start();
server.applyMiddleware({
  app,
  path: "/",
  cors: corsOptions,
});

await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));

Logger.info(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
