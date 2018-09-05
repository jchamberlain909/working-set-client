import React from 'react';
import './styles/NavLink.css'

const NavLink = ({text, path, action, clickHandler}) => {
    return ( 
        <li className="nav-link" onClick={action?action:()=>clickHandler(path)}>
            <a className="nav-link-text">{text}</a>
        </li>);
}
 
export default (NavLink);