import React, {Component} from 'react';
import { connect } from "react-redux";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import NavList from "./NavList";
import { logoutCurrentUser } from "../redux/actions/Auth";
import { withRouter } from "react-router-dom";
import "./styles/Navbar.css"

class Navbar extends Component {

    logoutUser = () => {
        localStorage.clear()
        this.props.logoutCurrentUser()
        this.props.history.push('/')
    }

    render(){
        const {loggedIn, currentUser} = this.props
        return ( 
            <div className="navbar">
                <NavLogo />
                {loggedIn ? (
                <NavList>
                    <NavLink text='Projects' path="/projects"/>
                    <NavLink text='Logout' clickHandler={this.logoutUser} />
                    <NavLink text={currentUser.name} path="/me"/>
                </NavList>
                ):(
                    <NavList>
                        <NavLink text='Login' path='/login'/>
                        <NavLink text='Sign Up' path='/signup'/>
                    </NavList>    
                )}
            </div> );
    }
}


const mapStateToProps = ({currentUser}) =>({loggedIn: !!currentUser, currentUser: currentUser})
 
export default withRouter(connect(mapStateToProps, {logoutCurrentUser})(Navbar));
 
