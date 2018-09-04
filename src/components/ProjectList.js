import React from 'react';
import { connect } from "react-redux";

const ProjectList = (props) => {
    return ( 
    <div>
        {props.projects.map(project=><li key={project.id}>{project.name}</li>)}
    </div> );
}

const mapStateToProps = ({projects}) => ({projects})
 
export default connect(mapStateToProps)(ProjectList);