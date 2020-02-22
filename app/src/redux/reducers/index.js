import { combineReducers } from "redux";
import blog from "./blog";
import dashboard from "./dashboard";

export default combineReducers({
  dashboard,
  blog,
});
