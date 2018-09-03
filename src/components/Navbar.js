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
    goToLink = (path) => {
        if (path!==this.props.location.pathname) {
            this.props.history.push(path)
        }
    }

    render(){
        const {loggedIn, currentUser} = this.props
        return ( 
            <div className="navbar">
                <NavLogo />
                {loggedIn ? (
                <NavList>
                    <NavLink text='Projects' path="/projects" clickHandler={this.goToLink}/>
                    <NavLink text='Logout' logout={this.logoutUser} />
                    <NavLink text={currentUser.name} path="/me" clickHandler={this.goToLink}/>
                </NavList>
                ):(
                    <NavList>
                        <NavLink text='Login' path='/login' clickHandler={this.goToLink}/>
                        <NavLink text='Sign Up' path='/signup' clickHandler={this.goToLink}/>
                    </NavList>    
                )}
            </div> );
    }
}


const mapStateToProps = ({currentUser}) =>({loggedIn: !!currentUser, currentUser: currentUser})
 
export default withRouter(connect(mapStateToProps, {logoutCurrentUser})(Navbar));
 
