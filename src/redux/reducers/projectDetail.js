import { SET_PROJECT_DETAILS } from "../actions/types";

export default (state={}, action) => {
    switch (action.type) {
        case SET_PROJECT_DETAILS:
            return {...action.project}
        default:
            return state
    }
}