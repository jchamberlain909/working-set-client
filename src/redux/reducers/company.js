import { SET_COMPANY, ADD_CONTACT } from "../actions/types";
import { LOGOUT_CURRENT_USER, REMOVE_USER } from "../actions/types";


export default (state=null, action) => {
    switch (action.type) {
        case SET_COMPANY:
            return action.company
        case ADD_CONTACT:
            return {...state,contacts:[...state.contacts,action.contact]}
        case LOGOUT_CURRENT_USER:
            return null
        case REMOVE_USER:
            return {...state, users: state.users.filter(user=>user.id!==action.userId)}
        default:
            return state
    }
}