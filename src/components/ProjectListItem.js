import React from 'react';
import './styles/ProjectListItem.css'

const ProjectListItem = ({project}) => {
    return ( 
    <tr className="project-list-item">
        <td>{project.name}</td>
        <td></td>
        <td></td>
    </tr> );
}
 
export default ProjectListItem;