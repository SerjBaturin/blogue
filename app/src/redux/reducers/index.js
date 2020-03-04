import { combineReducers } from "redux";
import blog from "./blog";
import mainPost from "./mainPost";
import login from "./login";
import dashboard from "./dashboard";
import users from "./users";
import getAdmin from "./getAdmin";

export default combineReducers({
  dashboard,
  blog,
  mainPost,
  login,
  users,
  getAdmin,
});
