import React from 'react';
import { Link } from "react-router-dom";
import './styles/ProjectListItem.css'

const ProjectListItem = ({project}) => {
    return ( 
    <tr className="project-list-item">
        <td><Link to={`/projects/${project.id}`}>{project.name}</Link></td>
        <td></td>
        <td></td>
    </tr> );
}
 
export default ProjectListItem;