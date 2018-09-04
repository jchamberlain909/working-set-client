import React from 'react';
import { connect } from "react-redux";
import ProjectListItem from "./ProjectListItem"
import "./styles/ProjectList.css"

const ProjectList = (props) => {
    return ( 
    
        <table className="project-list">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date Updated</th>
                    <th>Contacts</th>
                </tr>
            </thead>
            <tbody>   
                {props.projects.map(project=><ProjectListItem key={project.id} project={project}/>)}
            </tbody>
        </table>
     );
}

const mapStateToProps = ({projects}) => ({projects})
 
export default connect(mapStateToProps)(ProjectList);