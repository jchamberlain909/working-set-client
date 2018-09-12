import { SET_PROJECTS, ADD_PROJECT, DELETE_PROJECT } from "../actions/types";
import { LOGOUT_CURRENT_USER } from "../actions/types";


export default (state=[], action) => {
    switch (action.type) {
        case SET_PROJECTS:
            return action.projects
        case ADD_PROJECT:
            return [...state, action.project]
        case LOGOUT_CURRENT_USER:
            return []
        case DELETE_PROJECT:
            return state.filter(project=>project.id!==action.projectId)
        default:
            return state
    }
}