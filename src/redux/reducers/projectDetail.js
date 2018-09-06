import { SET_PROJECT_DETAILS, ADD_PROJECT_DRAWING } from "../actions/types";

export default (state={}, action) => {
    switch (action.type) {
        case SET_PROJECT_DETAILS:
            return {...action.project}
        default:
            return state
    }
}