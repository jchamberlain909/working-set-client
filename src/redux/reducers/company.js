import { SET_COMPANY } from "../actions/types";

export default (state=null, action) => {
    switch (action.type) {
        case SET_COMPANY:
            return action.company
        default:
            return state
    }
}