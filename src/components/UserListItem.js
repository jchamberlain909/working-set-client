import React from 'react';

const UserListItem = ({user, companyId, removeUser}) => {
    return ( 
        <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><i className="fas fa-times" onClick={()=>removeUser({companyId, userId:user.id})}></i></td>
        </tr>
    );
}
 
export default UserListItem;