import React, { Component } from 'react';
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

    render() { 
        return ( 
        <form className="user-form">
            <input type="text"
                    value={this.state.email}
                    name="email"
                    onChange={this.onChangeHandler}
                    placeholder="Email"
             />
             <button>Invite</button>
        </form> );
    }
}
 
export default UserForm;