import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addFollower} from '../redux/actions/projectDetail'
import { Search } from 'semantic-ui-react'
import './styles/FollowerForm.css'

class FollowerForm extends Component {
    state = { 
        loading: false,
        email: "",
        results: []
    }

    resetComponent = () => this.setState({ loading: false, results: [], email: '' })

    onResultSelect = (e,{result}) => {
        this.props.addFollower({projectId:this.props.projectId, email:result.title})
        .then(this.resetComponent)
    }

    onSearchChange = (e,{value}) => {
        this.setState({
            email:value,
            loading: true
        })
        setTimeout(() => {
            if (this.state.email.length < 1) return this.resetComponent()
      
            this.setState({
              loading: false,
              results: this.props.contacts.filter(contact=>contact.includes(this.state.email)).map(email=>({title:email}))
            })
          }, 300)
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        this.props.addFollower({projectId:this.props.projectId, email:this.state.email})
        .then(this.resetComponent)
    }

    render() { 
        const {loading, email, results} = this.state
        return (
        <form className="follower-form">
            <Search 
                loading={loading}
                onResultSelect={this.onResultSelect}
                onSearchChange={this.onSearchChange}
                results={results}
                value={email}
                showNoResults={false}
                placeholder="Add Follower by Email"
            />
            <button onClick={this.onSubmitHandler}><i className="fas fa-plus" /></button>
        </form> );
    }
}

const mapStateToProps = ({company}) => ({contacts:company.contacts})
 
export default connect(mapStateToProps,{addFollower})(FollowerForm);