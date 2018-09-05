import { SET_PROJECT_DETAILS } from "./types";
import { addError, removeError } from "./errors";


export const setProjectDetails = (project) =>({type:SET_PROJECT_DETAILS, project})

export const getProjectDetails = (id) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return fetch(`http://localhost:3000/project/${id}`,{
                headers:{
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Token ${localStorage.getItem("token")}`
                }
            }
            ).then(res=>{
                return res.json()
            })
            .then((json)=>{
                if (!json.success) {
                    throw json.message
                }
                dispatch(setProjectDetails(
                    {   
                        id:json.id,
                        name:json.name,
                        drawings: json.drawings
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

