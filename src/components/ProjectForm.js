import React, { Component } from 'react';
import { createProject } from "../redux/actions/projects";
import { connect } from "react-redux";
import ErrorMessage from './ErrorMessage'

class ProjectForm extends Component {
    state = { 
        name: ""
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    createProjectHandler = () => {
        this.props.createProject({name:this.state.name})
        .then((id)=>{
            this.props.history.push(`/projects/${id}`)
        }).catch(()=>{
            
        })
    }

    render() { 
        const {name} = this.state
        return ( 
        <div className="project-form">
            <h3>Create a Project</h3>
            <ErrorMessage />
            <input type="text" value={name} name="name" 
            placeholder='Project Name' onChange={this.onChangeHandler}/>
            <button onClick={this.createProjectHandler}>Create</button>
        </div> )
    }
}

export default connect(null,{createProject})(ProjectForm);