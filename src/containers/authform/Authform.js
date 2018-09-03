import React, { Component } from 'react';
import { connect } from "react-redux";
import { authUser } from "../../redux/actions/Auth";
import { withRouter } from "react-router-dom";
import "./Authform.css";

class AuthForm extends Component {
    state = { 
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        loading: false,
        done: false
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        this.setState({
            loading: true
        })
        // TODO add password, passwordConfirmation verification
        const {formType, authUser, history, location} = this.props
        const {name, email, password, passwordConfirmation } = this.state
        let payload = (formType ==='signup')?
            {name, email, password}:{email, password}

        authUser(formType, payload)
        .then(()=>{
            this.setState({loading:false, done: true})
            setTimeout(() => {
                history.goBack()
            }, 500);
        })
        .catch(()=>{
            console.log("failure")
        })
    }


    render() { 
        const {formType} = this.props
        const {loading, done} = this.state

        let buttonStatus = ""

        if (loading) {
            buttonStatus= "loading"
        }else if (done) {
            buttonStatus= "done"
        }else{
            buttonStatus = formType
        }

        return (
            <form className="authform">
                
                <h1>{formType==='signup'?"Sign Up":"Login"}</h1>
                <hr/>
                {formType==='signup'&&<input type="text" value={this.state.name}
                                         label='Name' 
                                         placeholder='Name'
                                         name='name'
                                         onChange={this.onChangeHandler} />}
                <input type="text" value={this.state.email} label='Email'
                    onChange={this.onChangeHandler} placeholder='Email'
                    name="email" />
                <input label='Password' placeholder='Password'
                    value={this.state.password} name="password"
                    onChange={this.onChangeHandler}
                    type='password' />
                {formType==='signup'&&<input label='Password Confirmation'
                                         placeholder='Password Confirmation'
                                         onChange={this.onChangeHandler}
                                         name="passwordConfirmation" 
                                         value={this.state.passwordConfirmation}
                                         type='password'/>}
                <button className={buttonStatus} onClick={this.onSubmitHandler}></button>
            </form> 
          );
    }
}

 
export default withRouter(connect(null, { authUser })(AuthForm));