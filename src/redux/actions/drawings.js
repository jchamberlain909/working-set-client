import { addError, removeError } from "./errors";
import { ADD_PROJECT_DRAWING } from "./types";

export const addProjectDrawing = (project_id, drawingData) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            let data = new FormData()
            data.append('drawing_file',drawingData.drawing_file)
            data.append('drawing_type', drawingData.drawing_type)
            return fetch(`http://localhost:3000/project/${project_id}/drawing`,{
                method:"POST",
                headers:{
                    
                    Authorization: `Token ${localStorage.getItem("token")}`
                },
                body:data
            }
            ).then(res=>{
                return res.json()
            })
            .then((json)=>{
                if (!json.success) {
                    throw json.message
                }
                dispatch({type:ADD_PROJECT_DRAWING, drawing:{
                    type: json.drawing_type,
                    url: json.url
                }})
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

