import React from 'react';
import './styles/FollowerListItem.css'

const FollowerListItem = ({follower, removeFollower, projectId}) => {
    return ( 
        <tr className="follower-list-item">
            <td>{follower.email}</td>
            <td>{follower.upToDate?<i className="far fa-check-circle"/>:<i className="fas fa-exclamation-triangle"/>}</td>
            <td><i className="fas fa-times" onClick={()=>removeFollower({followerId:follower.id, projectId:projectId})}/></td>
        </tr>
     );
}
 
export default FollowerListItem;