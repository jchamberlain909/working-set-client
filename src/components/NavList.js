import React from 'react';
import './styles/NavList.css'

const NavList = (props) => {
    return (
            <ul className="nav-list">
                {props.children}
            </ul>
      );
}
 
export default NavList;