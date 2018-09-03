import React from 'react';
import { withRouter } from "react-router-dom";
import './styles/NavLink.css'

const NavLink = ({text, history, path, clickHandler}) => {
    return ( 
        <li className="nav-link" onClick={clickHandler?clickHandler:()=>history.push(path)}>
            <a className="nav-link-text">{text}</a>
        </li>);
}
 
export default withRouter(NavLink);