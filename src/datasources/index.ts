import UserAPI from "./UserAPI.js";

const dataSources = (): any => ({
  userAPI: new UserAPI(),
});

export default dataSources;
