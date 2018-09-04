import React from 'react';
import { Switch, Route } from 'react-router'
import ProjectList from "../../components/ProjectList";
import ProjectForm from "../../components/ProjectForm";
import './ProjectView.css'



const ProjectView = (props) => {
    return ( 
    <div className="project-view">
        <Switch>
            <Route exact path="/projects/new" render={
                (routerProps)=><ProjectForm  {...routerProps}/>
            } />
            <Route path="/projects/:id" />
            <Route path="/projects" render={
                        (routerProps)=>
                        <ProjectList {...routerProps} />
                    }/>
        </Switch>
    </div> );
}
 
export default (ProjectView);