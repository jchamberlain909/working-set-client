import { SET_CURRENT_USER, LOGOUT_CURRENT_USER } from "./types";
import { addError, removeError } from "./errors";

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function logoutCurrentUser() {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

export function authUser(type, userData) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return fetch(`http://localhost:3000/${type}`,{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(userData)
            }
            ).then(res=>res.json())
            .then(({token, ...user})=>{
                localStorage.setItem('token', token)
                dispatch(setCurrentUser(user))
                dispatch(removeError())
                resolve()
            })
            .catch(err=>{
                dispatch(addError(err.message))
                reject()
            })
        })
    }
}

export function authUserFromToken() {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return fetch(`http://localhost:3000/user`,{
                headers:{
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Token ${localStorage.getItem("token")}`
                }
            }
            ).then(res=>res.json())
            .then(user=>{
                dispatch(setCurrentUser(user))
                dispatch(removeError())
                resolve()
            })
            .catch(err=>{
                dispatch(addError(err.message))
                reject()
            })
        })
    }
}


