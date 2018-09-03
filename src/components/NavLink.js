import React from 'react';
import './styles/NavLink.css'

const NavLink = ({text, path, logout, clickHandler}) => {
    return ( 
        <li className="nav-link" onClick={logout?logout:()=>clickHandler(path)}>
            <a className="nav-link-text">{text}</a>
        </li>);
}
 
export default (NavLink);