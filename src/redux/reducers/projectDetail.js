import { SET_PROJECT_DETAILS, ADD_FOLLOWER } from "../actions/types";

export default (state={}, action) => {
    switch (action.type) {
        case SET_PROJECT_DETAILS:
            return {...action.project}
        case ADD_FOLLOWER:
            return {...state, followers: [...state.followers, action.follower]}
        default:
            return state
    }
}