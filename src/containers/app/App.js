import React, { Component } from 'react';
import './App.css';
import Navbar from "../../components/Navbar";
import Content from "../content/Content";
import { connect } from "react-redux";
import { authUserFromToken } from "../../redux/actions/Auth";
import { withRouter } from "react-router";


class App extends Component {

  componentDidMount(){
    if (!!localStorage.getItem('token')) {
      this.props.authUserFromToken()
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Content />
      </div>
    );
  }
}

export default withRouter(connect(null, { authUserFromToken } )(App));
