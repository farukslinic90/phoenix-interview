import { UserInputError } from "apollo-server-core";
import type { Context, Info, UserResponse } from "../types.js";
import UserAPI from "../datasources/UserAPI.js";
import { CacheScope } from "apollo-server-types";

export interface queryArgs {
  [argName: string]: any;
  baseSiteId: string;
}

export default {
  user: async (
    parent: undefined,
    args: queryArgs,
    ctx: Context,
    info: Info
  ): Promise<UserResponse | null> => {
    info.cacheControl.setCacheHint({ maxAge: 0, scope: CacheScope.Private });

    const { dataSources } = ctx;
    const dataSource: UserAPI = dataSources.userAPI;
    const user = await dataSource.getUser();
    return user;
  },
};

export const userMutation = {
  updateUser: async (
    parent: undefined,
    args: queryArgs,
    ctx: Context,
    info: Info
  ): Promise<UserResponse | null> => {
    info.cacheControl.setCacheHint({ maxAge: 0, scope: CacheScope.Private });

    const { dataSources } = ctx;
    const dataSource: UserAPI = dataSources.userAPI;

    const response = await dataSource.updateUser(args.message);

    return response;
  },
};
