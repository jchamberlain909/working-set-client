import { SET_PROJECT_DETAILS, ADD_PROJECT_DRAWING } from "../actions/types";

export default (state={}, action) => {
    switch (action.type) {
        case SET_PROJECT_DETAILS:
            return {...action.project}
        case ADD_PROJECT_DRAWING:
            return {...state,drawings:[...state.drawings,action.drawing]}
        default:
            return state
    }
}