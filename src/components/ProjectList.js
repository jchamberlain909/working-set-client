import React from 'react';
import { connect } from "react-redux";
import ProjectListItem from "./ProjectListItem"
import "./styles/ProjectList.css"

const ProjectList = (props) => {
    return ( 
    <div className="project-list">
        {props.projects.map(project=><ProjectListItem key={project.id} project={project}/>)}
    </div> );
}

const mapStateToProps = ({projects}) => ({projects})
 
export default connect(mapStateToProps)(ProjectList);