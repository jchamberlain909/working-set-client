import React from 'react';
import {withRouter, Switch, Route } from 'react-router'
import ProjectList from "../../components/ProjectList";
import FAB from "../../components/FAB";
import ProjectForm from "../../components/ProjectForm";
import './ProjectView.css'



const ProjectView = (props) => {
    return ( 
    <div className="project-view">
        <Switch>
            <Route path="/projects/new" render={
                (routerProps)=><ProjectForm  {...routerProps}/>
            } />
            <Route path="/projects" render={
                        (routerProps)=>
                        <React.Fragment>
                            <ProjectList {...routerProps} />
                            <FAB clickHandler={()=>props.history.push('/projects/new')}/>
                        </React.Fragment>
                    }/>
            
        </Switch>
    </div> );
}
 
export default withRouter(ProjectView);