import React, { Component } from 'react';
import authenticationHOC from "../../hoc/authenticationHOC";
import { connect } from "react-redux";
import ProjectView from "../projectview/ProjectView";
import CompanyForm from "../../components/CompanyForm";
import './CompanyView.css'

class CompanyView extends Component {
    render() { 
        const {company} = this.props
        return (
        <div className="company-view-container">
            {!!company?
                <div className="company-view">
                    <h1>{company.name}</h1>
                    <ProjectView />
                    
                </div>:
                <div>
                    <CompanyForm />
                </div>
            }
        </div>  );
    }
}

const mapStateToProps = ({company}) => ({company})
 
export default authenticationHOC(connect(mapStateToProps)(CompanyView));