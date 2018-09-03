import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import Home from "../../components/Home";
import AuthForm from '../authform/Authform'
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
                </Switch>
            </div>
          );
    }
}
 
export default Content;