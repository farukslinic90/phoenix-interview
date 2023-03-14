import type { Logger, ResolveInfoCacheControl } from "apollo-server-types";
import { UserAPI } from "./datasources/UserAPI";

export interface UserResponse {
  id: number;
  uid: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  message: string;
}

export interface DataSources {
  [name: string]: DataSource;

  userAPI: UserAPI;
}

export type Info = GraphQLResolveInfo & {
  [name: string]: string;
  cacheControl: ResolveInfoCacheControl;
};

export interface Context {
  dataSources: DataSources;
  req: Request;
  res: Response;
  logger: Logger;
}
