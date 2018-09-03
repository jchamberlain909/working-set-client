import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import Home from "../../components/Home";
import AuthForm from '../authform/Authform'


class Content extends Component {
    
    render() { 
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/signup" render={
                    (routerProps)=><AuthForm {...routerProps} formType="signup"/>}/>
                <Route exact path="/login" render={
                    (routerProps)=><AuthForm {...routerProps} formType="login"/>}/>
            </Switch>
          );
    }
}
 
export default Content;