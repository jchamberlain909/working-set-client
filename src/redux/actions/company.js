import { SET_COMPANY, ADD_CONTACT } from "./types";
import { addError, removeError } from "./errors";


export const setCompany = (company) => ({type:SET_COMPANY,company})

export const getCompany = () => {
    return dispatch => {
        return fetch(`http://localhost:3000/company`,{
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
            return fetch(`http://localhost:3000/company`,{
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

export const addContact = (email) => ({type:ADD_CONTACT, contact:email})