import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addFollower} from '../redux/actions/projectDetail'
import './styles/FollowerForm.css'

class FollowerForm extends Component {
    state = { 
        email: ""
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        this.props.addFollower({projectId:this.props.projectId, email:this.state.email})
        .then(()=>this.setState({email:""}))
    }

    render() { 
        return (
        <form className="follower-form">
            <input type="text" value={this.state.email} 
                    name="email" onChange={this.onChangeHandler}
                    placeholder="Add Email"/>
            <button onClick={this.onSubmitHandler}><i className="fas fa-plus" /></button>
        </form> );
    }
}
 
export default connect(null,{addFollower})(FollowerForm);