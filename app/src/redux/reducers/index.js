import { combineReducers } from "redux";
import blog from "./blog";
import login from "./login";
import dashboard from "./dashboard";

export default combineReducers({
  dashboard,
  blog,
  login,
});
