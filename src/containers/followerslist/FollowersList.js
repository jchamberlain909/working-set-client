import React, { Component } from 'react';
import { connect } from "react-redux";
import FollowerForm from '../../components/FollowerForm'


class FollowersList extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <FollowerForm projectId={this.props.projectId}/>
        </div> );
    }
}

const mapStateToProps = ({projectDetail}) => ({followers:projectDetail.followers})

export default connect(mapStateToProps)(FollowersList);