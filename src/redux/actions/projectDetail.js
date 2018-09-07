import { SET_PROJECT_DETAILS, ADD_FOLLOWER, REMOVE_FOLLOWER } from "./types";
import { addError, removeError } from "./errors";
import {addContact} from './company'


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
            .then(({success,message, project})=>{
                if (!success) {
                    throw message
                }
                dispatch(setProjectDetails(
                    {   
                        id:project.id,
                        name:project.name,
                        drawingLink:project.drawing_link,
                        lastUpdated:project.last_updated,
                        followers: project.followers.map(follower=>({id:follower.id,email:follower.email,upToDate:follower.up_to_date}))
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


export const addFollower = ({projectId, email}) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            return fetch(`http://localhost:3000/project/${projectId}/follow`,{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Token ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    email
                })
            }
            ).then(res=>{
                return res.json()
            })
            .then(({success,message, follower})=>{
                if (!success) {
                    throw message
                }
                dispatch({type:ADD_FOLLOWER, follower:
                    {   id: follower.id,
                        email:follower.email,
                        upToDate:follower.up_to_date}})
                dispatch(addContact(email))
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

export const removeFollower = ({projectId, followerId}) => {
    return dispatch => {
        return fetch(`http://localhost:3000/project/${projectId}/follow/${followerId}`,{
                method: "DELETE",
                headers:{
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Token ${localStorage.getItem("token")}`
                }
            }
            ).then(res=>{
                return res.json()
            })
            .then(({success,message})=>{
                if (!success) {
                    throw message
                }
                dispatch({type:REMOVE_FOLLOWER, id:followerId})
                
                dispatch(removeError())
            })
            .catch(err=>{
                dispatch(addError(err))
            })
    }
}

