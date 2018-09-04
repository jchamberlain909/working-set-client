import React from 'react';
import { Switch, Route } from 'react-router'
import ProjectList from "../../components/ProjectList";


const ProjectView = () => {
    return ( 
    <div className="project-view">
        <Switch>
            <Route exact path="/projects" render={
                        (routerProps)=><ProjectList {...routerProps} />
                    }/>
        </Switch>
    </div> );
}
 
export default ProjectView;