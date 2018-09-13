import React, { Component } from 'react';
import { createProject } from "../redux/actions/projects";
import { connect } from "react-redux";
import ErrorMessage from './ErrorMessage'
import './styles/ProjectForm.css'

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
            <h1>Create a Project</h1>
            <ErrorMessage />
            <input type="text" value={name} name="name" 
            placeholder='Project Name' onChange={this.onChangeHandler}/>
            <button onClick={this.createProjectHandler}>Create</button>
        </div> )
    }
}

export default connect(null,{createProject})(ProjectForm);