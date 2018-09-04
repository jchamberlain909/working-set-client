import React from 'react';
import './styles/ProjectListItem.css'

const ProjectListItem = ({project}) => {
    return ( 
    <div className="project-list-item">
        <h3>{project.name}</h3>
    </div> );
}
 
export default ProjectListItem;