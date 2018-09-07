import { SET_COMPANY, ADD_CONTACT } from "../actions/types";

export default (state=null, action) => {
    switch (action.type) {
        case SET_COMPANY:
            return action.company
        case ADD_CONTACT:
            return {...state,contacts:[...state.contacts,action.contact]}
        default:
            return state
    }
}