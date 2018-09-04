import { SET_COMPANY } from "./types";
import { addError, removeError } from "./errors";


export const setCompany = (company) => ({type:SET_COMPANY,company})

export const createCompany = (companyName) => {
    return dispatch => {
            return fetch(`http://localhost:3000/company`,{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Token ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({name:companyName})
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