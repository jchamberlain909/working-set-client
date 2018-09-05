import React from 'react';
import { Switch, Route } from 'react-router'
import ProjectList from "../../components/ProjectList";
import ProjectForm from "../../components/ProjectForm";
import ProjectDetail from "../projectdetail/ProjectDetail";
import './ProjectView.css'



const ProjectView = (props) => {
    return ( 
    <div className="project-view">
        <Switch>
            <Route exact path="/projects/new" render={
                (routerProps)=><ProjectForm  {...routerProps}/>
            } />
            <Route path="/projects/:id" render={
                        (routerProps)=>
                        <ProjectDetail {...routerProps} />
                    } />
            <Route path="/projects" render={
                        (routerProps)=>
                        <ProjectList {...routerProps} />
                    }/>
        </Switch>
    </div> );
}
 
export default (ProjectView);