import React, { Component } from 'react';
import { createCompany } from "../redux/actions/company";
import { connect } from "react-redux";

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
        this.props.createCompany(this.state.name)
    }

    render() { 
        const {name} = this.state
        return ( 
        <div className="company-form">
            <h3>Create a company</h3>
            <input type="text" value={name} name="name" 
            placeholder='Company Name' onChange={this.onChangeHandler}/>
            <button onClick={this.createCompanyHandler}>Create</button>
        </div> );
    }
}

 
export default connect(null,{createCompany})(CompanyForm);