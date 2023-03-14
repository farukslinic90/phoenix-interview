import pino from "pino";

const isProduction = process.env.NODE_ENV === "production";

const options = {
  name: "gql-logger",
  level: isProduction ? "info" : "debug",
  transport: {
    target: "pino-pretty",
    options: {
      translateTime: "yyyy-mm-dd HH:MM:ss.l o",
    },
  },
};

const logger = pino(options);

export default logger;
