import React, { Component } from 'react';
import { connect } from "react-redux";
import EditableField from './EditableField'
import authenticationHOC from '../hoc/authenticationHOC'
import './styles/CompanyEdit.css'

class CompanyEdit extends Component {
    state = {  }
    render() { 
        const {company} = this.props
        return ( 
        <div className="company-edit">
            <EditableField>
                <h3>{company.name}</h3>
            </EditableField>
        </div> );
    }
}

const mapStateToProps = ({company}) => ({company})
 
export default connect(mapStateToProps)(authenticationHOC(CompanyEdit));