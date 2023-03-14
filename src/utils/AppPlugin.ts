import { ApolloServerPlugin } from "apollo-server-plugin-base";
import { UserResponse } from "../types";

let userInfo: UserResponse;

export const getUserData = () => userInfo;
export const setUserData = (message: string) => {
  userInfo = { ...userInfo, message: `manual - ${message}` };
  return userInfo;
};

export const LoggerPlugin: ApolloServerPlugin = {
  async serverWillStart(service) {
    const date = new Date();
    const time = date.getTime();
    const logger = service.logger;
    logger.info(`🔆 GraphQL Server starting up`);
    const data = await fetch("https://random-data-api.com/api/v2/users").then(
      (res) => res.json()
    );

    userInfo = { ...data, message: `automated - ${new Date().toString()}` };
    setInterval(() => {
      userInfo = { ...data, message: `automated - ${new Date().toString()}` };
    }, 1000 * 60);
  },
};
