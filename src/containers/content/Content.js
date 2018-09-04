import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import Home from "../../components/Home";
import AuthForm from '../authform/Authform'
import Profile from "../../components/Profile";
import CompanyView from "../companyview/CompanyView"
import './Content.css'


class Content extends Component {
    
    render() { 
        return (
            <div className="content">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/signup" render={
                        (routerProps)=><AuthForm {...routerProps} formType="signup"/>}/>
                    <Route exact path="/login" render={
                        (routerProps)=><AuthForm {...routerProps} formType="login"/>}/>
                    <Route exact path="/me" render={
                        (routerProps)=><Profile {...routerProps} />
                    }/>
                    <Route path="/projects" render={
                        (routerProps)=><CompanyView {...routerProps} />
                    }/>
                </Switch>
            </div>
          );
    }
}
 
export default Content;