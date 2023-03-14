import { RESTDataSource } from "apollo-datasource-rest";
import { UserResponse } from "../types";
import { getUserData, setUserData } from "../utils/AppPlugin.js";

class UserAPI extends RESTDataSource {
  async getUser(): Promise<UserResponse | null> {
    return getUserData();
  }

  async updateUser(message: string): Promise<UserResponse | null> {
    return setUserData(message);
  }
}

export default UserAPI;
