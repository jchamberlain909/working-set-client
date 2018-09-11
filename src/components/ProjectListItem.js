import React from 'react';
import { Link } from "react-router-dom";
import './styles/ProjectListItem.css'
import moment from 'moment'


const ProjectListItem = ({project}) => {
    return ( 
    <tr className="project-list-item">
        <td><Link to={`/projects/${project.id}`}>{project.name}</Link></td>
        <td>{moment(project.lastUpdated).format('MMMM Do YYYY')}</td>
    </tr> );
}
 
export default ProjectListItem;