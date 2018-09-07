import { SET_COMPANY, ADD_CONTACT } from "./types";
import { addError, removeError } from "./errors";


export const setCompany = (company) => ({type:SET_COMPANY,company})

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
            .then((json)=>{
                if (!json.success) {
                    throw json.message
                }
                dispatch(setCompany({id:json.id,name:json.name}))
                dispatch(removeError())
            })
            .catch(err=>{
                dispatch(addError(err))
            })
    }
}

export const addContact = (email) => ({type:ADD_CONTACT, contact:email})