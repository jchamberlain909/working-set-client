import React, {Component} from 'react';
import { connect } from "react-redux";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import NavList from "./NavList";
import { logoutCurrentUser, authUserFromToken } from "../redux/actions/Auth";
import { withRouter } from "react-router-dom";
import "./styles/Navbar.css"

class Navbar extends Component {

    logoutUser = () => {
        localStorage.clear()
        this.props.logoutCurrentUser()
        this.props.history.push('/')
    }

    loginUser = () => {
        if (!!localStorage.getItem('token')) {
            this.props.authUserFromToken()
            .then(this.props.history.push('/projects'))
        }else{
            this.props.history.push('/login')
        }
    }
    goToLink = (path) => {
        if (path!==this.props.location.pathname) {
            this.props.history.push(path)
        }
    }

    render(){
        const {loggedIn, currentUser} = this.props
        return ( 
            <div className={loggedIn?"navbar authed":"navbar"}>
                <NavLogo />
                {loggedIn ? (
                <NavList>
                    <NavLink text='Projects' path="/projects" clickHandler={this.goToLink}/>
                    <NavLink text='Logout' action={this.logoutUser} />
                    <NavLink text={currentUser.name} path="/me" clickHandler={this.goToLink}/>
                </NavList>
                ):(
                    <NavList>
                        <NavLink text='Login' path='/login' action={this.loginUser} />
                        <NavLink text='Sign Up' path='/signup' clickHandler={this.goToLink}/>
                    </NavList>    
                )}
            </div> );
    }
}


const mapStateToProps = ({currentUser}) =>({loggedIn: !!currentUser, currentUser: currentUser})
 
export default withRouter(connect(mapStateToProps, {logoutCurrentUser, authUserFromToken})(Navbar));
 
