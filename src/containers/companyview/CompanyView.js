import React, { Component } from 'react';
import authenticationHOC from "../../hoc/authenticationHOC";
import { Switch, Route } from 'react-router'
import { connect } from "react-redux";
import './CompanyView.css'

class CompanyView extends Component {
    render() { 
        return (
        <div className="company-view">


        </div>  );
    }
}

const mapStateToProps = ({}) => ({})
 
export default authenticationHOC(CompanyView);