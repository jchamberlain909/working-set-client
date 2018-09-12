import React, { Component } from 'react';
import { connect } from "react-redux";
import { inviteUser } from "../redux/actions/company";
import './styles/UserForm.css'

class UserForm extends Component {
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
        this.props.inviteUser({companyId:this.props.companyId, email:this.state.email})
        .then(()=>this.setState({email:""}))
        .catch(()=>{
            
        })
    }

    render() { 
        return ( 
        <form className="user-form">
            <input type="text"
                    value={this.state.email}
                    name="email"
                    onChange={this.onChangeHandler}
                    placeholder="Email"
             />
             <button onClick={this.onSubmitHandler}>Invite</button>
        </form> );
    }
}
 
export default connect(null,{inviteUser})(UserForm);