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
            return fetch(`https://hidden-temple-37504.herokuapp.com/${type}`,{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(userData)
            }
            ).then(res=>{
                return res.json()
            })
            .then((json)=>{
                if (!json.success) {
                    throw json.message
                }
                localStorage.setItem('token', json.token)
                dispatch(setCurrentUser({
                                            id:json.id,
                                            name: json.name,
                                            email: json.email
                                        }))
                dispatch(removeError())
                resolve()
            })
            .catch(err=>{
                dispatch(addError(err))
                reject()
            })
        })
    }
}

export function authUserFromToken() {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return fetch(`https://hidden-temple-37504.herokuapp.com/user`,{
                headers:{
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Token ${localStorage.getItem("token")}`
                }
            }
            ).then(res=>res.json())
            .then(json=>{
                
                dispatch(setCurrentUser({
                    id:json.id,
                    name: json.name,
                    email: json.email
                }))
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


