import React, { Component } from 'react';
import { connect } from "react-redux";
import FollowerForm from '../../components/FollowerForm'
import FollowerListItem from '../../components/FollowerListItem'
import {removeFollower} from '../../redux/actions/projectDetail'
import './FollowersList.css'

class FollowersList extends Component {
    

    render() { 
        const {followers, removeFollower, projectId} = this.props
        return ( 
        <div>
            <FollowerForm projectId={projectId}/>
            <table className="follower-list">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Up To Date?</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {followers.map(follower=><FollowerListItem 
                                    key={follower.id} follower={follower}
                                    removeFollower={removeFollower}
                                    projectId={projectId}/>)}
                </tbody>
            </table>
        </div> );
    }
}

const mapStateToProps = ({projectDetail}) => ({followers:projectDetail.followers})

export default connect(mapStateToProps,{removeFollower})(FollowersList);