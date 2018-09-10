import { SET_PROJECT_DETAILS, ADD_FOLLOWER, REMOVE_FOLLOWER } from "../actions/types";

export default (state={}, action) => {
    switch (action.type) {
        case SET_PROJECT_DETAILS:
            return {...action.project}
        case ADD_FOLLOWER:
            return {...state, followers: [...state.followers, action.follower]}
        case REMOVE_FOLLOWER:
            return {...state, followers:state.followers.filter(follower=>follower.id!==action.id)}
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return state
    }
}