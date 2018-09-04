import { SET_PROJECTS } from "../actions/types";

export default (state=null, action) => {
    switch (action.type) {
        case SET_PROJECTS:
            return action.projects
        default:
            return state
    }
}