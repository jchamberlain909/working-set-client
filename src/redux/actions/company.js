import { SET_COMPANY, ADD_CONTACT, REMOVE_USER } from "./types";
import { addError, removeError } from "./errors";


export const setCompany = (company) => ({type:SET_COMPANY,company})

export const getCompany = () => {
    return dispatch => {
        return fetch(`https://hidden-temple-37504.herokuapp.com/company`,{
                headers:{
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Token ${localStorage.getItem("token")}`
                }
            }
            ).then(res=>{
                return res.json()
            })
            .then(({success, message, company})=>{
                if (!success) {
                    throw message
                }
                dispatch(setCompany(company))
                dispatch(removeError())
            })
            .catch(err=>{
                dispatch(addError(err))
            })
    }
}

export const createCompany = (companyData) => {
    return dispatch => {
            return fetch(`https://hidden-temple-37504.herokuapp.com/company`,{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Token ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(companyData)
            }
            ).then(res=>{
                return res.json()
            })
            .then(({success, message, company})=>{
                if (!success) {
                    throw message
                }
                dispatch(setCompany(company))
                dispatch(removeError())
            })
            .catch(err=>{
                dispatch(addError(err))
            })
    }
}


export const editCompany = ({id, name}) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
        return fetch(`https://hidden-temple-37504.herokuapp.com/company/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Token ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({name:name})
        }
        ).then(res=>{
            return res.json()
        })
        .then(({success, message, company})=>{
            if (!success) {
                throw message
            }
            dispatch(setCompany(company))
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

export const addContact = (email) => ({type:ADD_CONTACT, contact:email})


export const removeUser = ({companyId, userId}) => {
    return dispatch => {
        return fetch(`https://hidden-temple-37504.herokuapp.com/company/${companyId}/user/${userId}`,{
            method:"DELETE",
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Token ${localStorage.getItem("token")}`
            }
        }
        ).then(res=>{
            return res.json()
        })
        .then(({success, message})=>{
            if (!success) {
                throw message
            }
            dispatch({type:REMOVE_USER, userId})
            dispatch(removeError())
        })
        .catch(err=>{
            dispatch(addError(err))
        })
}
}

export const inviteUser = ({companyId, email}) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
        return fetch(`https://hidden-temple-37504.herokuapp.com/company/${companyId}/user`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Token ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({email})
        }
        ).then(res=>{
            return res.json()
        })
        .then(({success, message})=>{
            if (!success) {
                throw message
            }
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