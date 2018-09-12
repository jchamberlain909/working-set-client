import React, { Component } from 'react';
import {connect} from 'react-redux'
import {removeError} from '../redux/actions/errors'
import './styles/ErrorMessage.css'

class ErrorMessage extends Component {
   
    componentWillUnmount(){
        this.props.removeError()
    }

    render() { 
        const {error} = this.props
        return (
        <React.Fragment>
            {error&&<div className="error">
                <p>{error}</p>
                <i className="fas fa-times" onClick={()=>this.props.removeError()}/>
            </div>} 
        </React.Fragment> 
        );

    }
}

const mapStateToProps = ({errors}) => ({error:errors.message})
 
export default connect(mapStateToProps,{removeError})(ErrorMessage);