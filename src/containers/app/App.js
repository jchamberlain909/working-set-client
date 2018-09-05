import React, { Component } from 'react';
import './App.css';
import Navbar from "../../components/Navbar";
import Content from "../content/Content";
import { connect } from "react-redux";
import { authUserFromToken } from "../../redux/actions/Auth";
import { withRouter } from "react-router";


class App extends Component {

  render() {
    const {loggedIn} = this.props
    return (
      <div className={loggedIn?"App Authed":"App"}>
        <Navbar />
        <Content />
      </div>
    );
  }
}
const mapStateToProps = ({currentUser})=>({loggedIn:!!currentUser})

export default withRouter(connect(mapStateToProps, { authUserFromToken } )(App));
