import React from 'react';
import {connect} from 'react-redux'
import UserListItem from './UserListItem'
import UserForm from './UserForm'
import { removeUser } from "../redux/actions/company";
import './styles/UserList.css'

const UserList = ({users, removeUser, companyId, currentUserId}) => {
    return ( 
    <div className="user-list-container">
        <h2>Current Team Members</h2>
        <table className="user-list">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user=><UserListItem key={user.id} user={user}
                                    removeUser={removeUser} companyId={companyId}
                                     currentUserId={currentUserId}/>)}
            </tbody>
        </table>
        <h2>Invite a user to join your team</h2>
        <UserForm companyId={companyId}/>
    </div> );
}
const mapStateToProps = ({company, currentUser}) => 
    ({users:company.users,
     companyId: company.id,
    currentUserId:currentUser.id})
 
export default connect(mapStateToProps, {removeUser})(UserList);