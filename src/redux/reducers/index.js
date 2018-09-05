import { combineReducers } from 'redux';
import user from "./user";
import errors from "./errors";
import company from "./company";
import projects from "./projects";
import projectDetail from "./projectDetail"

export default combineReducers({
    currentUser: user,
    errors,
    company,
    projects,
    projectDetail
  });