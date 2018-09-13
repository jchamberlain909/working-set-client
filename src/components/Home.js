import React, {Component} from 'react';
import { connect } from "react-redux";
import './styles/Home.css'

class Home extends Component {

    componentDidMount() {
        if (this.props.isAuthenticated) {
            this.props.history.push('/projects')
        }
    }
    
    render() { 
        return ( 
            <div className="home">
                <h1>workingSet</h1>
                <h4>A Simple Construction Drawing Distribution Platform</h4>
                <div className="diagram">
                    <i className="fas fa-map fa-5x" style={{width:'90px'}}/>
                    <i className="fas fa-long-arrow-alt-down fa-5x" style={{width:'40px'}}/>

                    <i className="fas fa-cloud fa-5x" style={{width:'100px'}}/>
                    <div className="row">
                        <i className="fas fa-user-check fa-5x" style={{width:'100px'}}/>
                        <i className="fas fa-user-times fa-5x" style={{width:'100px'}} />
                    </div>
                </div>
                
            </div>
         );
    }
}
 
 
const mapStateToProps = ({currentUser}) => ({isAuthenticated:!!currentUser})
export default connect(mapStateToProps)(Home);