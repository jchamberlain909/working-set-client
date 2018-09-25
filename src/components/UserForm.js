import React, { Component } from 'react';
import { connect } from "react-redux";
import { inviteUser } from "../redux/actions/company";
import './styles/UserForm.css'

class UserForm extends Component {
    state = { 
        email: "",
        success: false
     }

     onChangeHandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        this.props.inviteUser({companyId:this.props.companyId, email:this.state.email})
        .then(()=>{
            this.setState({email:"", success:true})
            setTimeout(() => {
                this.setState({success:false})
            }, 2000);
        })
        .catch(()=>{
            
        })
    }

    render() { 
        return ( 
        <React.Fragment>
            {this.state.success&&<div className="success">Invitation Sent</div>}
            <form className="user-form">
                <input type="text"
                        value={this.state.email}
                        name="email"
                        onChange={this.onChangeHandler}
                        placeholder="Email"
                />
                <button onClick={this.onSubmitHandler}>Invite</button>
            </form> 
        </React.Fragment>
        );
    }
}
 
export default connect(null,{inviteUser})(UserForm);