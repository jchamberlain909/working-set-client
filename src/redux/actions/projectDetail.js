import { SET_PROJECT_DETAILS, ADD_FOLLOWER } from "./types";
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
                        followers: project.followers.map(follower=>({email:follower.email,upToDate:follower.up_to_date}))
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
                    {   email:follower.email,
                        upToDate:follower.up_to_date}})
                
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

