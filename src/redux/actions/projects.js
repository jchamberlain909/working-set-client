import { SET_PROJECTS, ADD_PROJECT } from "./types";
import { addError, removeError } from "./errors";


export const setProjects = (projects) => ({type:SET_PROJECTS,projects})

export const addProject = (project) => ({type:ADD_PROJECT, project})

export const getProjects = () => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return fetch(`http://localhost:3000/project`,{
                headers:{
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Token ${localStorage.getItem("token")}`
                }
            }
            ).then(res=>{
                return res.json()
            })
            .then(({success,message, projects})=>{
                if (!success) {
                    throw message
                }
                
                dispatch(setProjects(projects))
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

export const createProject = (projectData) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return fetch(`http://localhost:3000/project`,{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Token ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(projectData)
            }
            ).then(res=>{
                return res.json()
            })
            .then((json)=>{
                if (!json.success) {
                    throw json.message
                }
                dispatch(addProject({id:json.id,name:json.name}))
                dispatch(removeError())
                resolve(json.id)
            })
            .catch(err=>{
                dispatch(addError(err))
                reject()
            })
        })
    }
}

