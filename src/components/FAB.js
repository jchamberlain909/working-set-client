import React from 'react';
import './styles/FAB.css'

const FAB = ({clickHandler}) => {
    return ( <button onClick={clickHandler} className="fab"><i className="fas fa-plus"></i></button> );
}
 
export default FAB;