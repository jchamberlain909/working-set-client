import React from 'react';
import {withRouter} from 'react-router-dom'
import './styles/NavLogo.css'

const NavLogo = (props) => {
    return (
        <div onClick={()=>props.history.push('/')} className="nav-logo">
            wS
        </div>
    );
}
export default withRouter(NavLogo);