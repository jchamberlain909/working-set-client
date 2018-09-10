import { SET_PROJECTS, ADD_PROJECT } from "../actions/types";

export default (state=[], action) => {
    switch (action.type) {
        case SET_PROJECTS:
            return action.projects
        case ADD_PROJECT:
            return [...state, action.project]
        case LOGOUT_CURRENT_USER:
            return []
        default:
            return state
    }
}