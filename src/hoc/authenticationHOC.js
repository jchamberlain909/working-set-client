import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addError } from "../redux/actions/errors";
import { authUserFromToken } from "../redux/actions/Auth"

const authenticationHOC = Component => {
    class Authenticate extends Component {
       componentWillMount(){
        if (!!localStorage.getItem('token') && !this.props.isAuthenticated) {
          this.props.authUserFromToken()
        }
        else if(!this.props.isAuthenticated){
          this.props.addError("You must be logged in to view this")
          this.props.history.push('/login')
        }
       }
       componentWillUpdate(){
        if (!!localStorage.getItem('token') && !this.props.isAuthenticated) {
          this.props.authUserFromToken()
        }
        else if(!this.props.isAuthenticated){
          this.props.addError("You must be logged in to view this")
          this.props.history.push('/login')
        }
       }
       render(){
          return <Component {...this.props}/>
        }
    }
    const mapStateToProps = ({currentUser}) => ({isAuthenticated:!!currentUser})
    return withRouter(connect(mapStateToProps, {addError, authUserFromToken})(Authenticate))
}

export default authenticationHOC;
