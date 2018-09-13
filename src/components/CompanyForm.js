import React, { Component } from 'react';
import { createCompany } from "../redux/actions/company";
import { connect } from "react-redux";
import ErrorMessage from './ErrorMessage'
import './styles/CompanyForm.css'

class CompanyForm extends Component {
    state = { 
        name: ""
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    createCompanyHandler = () => {
        this.props.createCompany({name:this.state.name})
    }

    render() { 
        const {name} = this.state
        return ( 
        <div className="company-form">
            <h1>Create a Company</h1>
            <ErrorMessage />
            <input type="text" value={name} name="name" 
            placeholder='Company Name' onChange={this.onChangeHandler}/>
            <button onClick={this.createCompanyHandler}>Create</button>
            <h1>Join a Company</h1>
            <p>To join a company you must be invited by a team member. Please have a member of your team sign in, go to Company Actions, select Add/Remove Users and invite you by email.</p>
        </div> );
    }
}

 
export default connect(null,{createCompany})(CompanyForm);