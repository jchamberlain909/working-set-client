import React, { Component } from 'react';
import authenticationHOC from "../../hoc/authenticationHOC";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ProjectView from "../projectview/ProjectView";
import CompanyForm from "../../components/CompanyForm";
import {getCompany} from "../../redux/actions/company"
import LoadingSpinner from "../../components/LoadingSpinner"
import './CompanyView.css'

class CompanyView extends Component {
    state = {
        loading: true
    }

    componentDidMount(){
        this.setState({loading: true})
        this.props.getCompany()
        .then(()=>{
            this.setState({loading: false})
        })
    }


    render() { 
        const {loading} = this.state
        const {company} = this.props
        return (
        <div className="company-view-container">
            {loading?<LoadingSpinner/>:(!!company?
                <div className="company-view">
                    <div className="company-view-header">
                        <h1>{company.name}</h1>
                        <Link to="/projects/new">New Project</Link>
                    </div>
                    <ProjectView />
                    
                </div>:
                <div>
                    <CompanyForm />
                </div>)
            }
        </div>  );
    }
}

const mapStateToProps = ({company}) => ({company})
 
export default authenticationHOC(connect(mapStateToProps, {getCompany})(CompanyView));