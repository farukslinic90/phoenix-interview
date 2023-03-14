import type { IResolvers } from "@graphql-tools/utils";
import userResolver, { userMutation } from "./userResolver.js";

// A map of functions which return data for the schema.

const resolvers: IResolvers<any, any, Record<string, any>, any> = {
  Query: {
    ...userResolver,
  },
  Mutation: {
    ...userMutation,
  },
};

export default resolvers;
