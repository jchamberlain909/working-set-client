import React, { Component } from 'react';
import { connect } from "react-redux";
import { getProjectDetails } from "../../redux/actions/projectDetail";
import LoadingSpinner from '../../components/LoadingSpinner'
import FollowersList from '../followerslist/FollowersList'
import './ProjectDetail.css'

class ProjectDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true
        }
        this.id = props.match.params.id
    }
   
    componentDidMount(){
        this.setState({loading: true})
        this.props.getProjectDetails(this.id)
        .then(()=>{
            this.setState({loading: false})
        })
    }

    render() { 
        const {projectDetail} = this.props 
        const {loading} = this.state
        return ( 
        <div className="project-detail">
            {loading? <LoadingSpinner />:
            <React.Fragment>
                <div className="project-detail-header">
                    <h2>{projectDetail.name}</h2>
                    <h4>Last Updated: <span>{projectDetail.lastUpdated}</span></h4>
                    <h4><a href={projectDetail.drawingLink} target="_blank">View Current Drawings</a></h4>
                    <button>Push Updated Drawings</button>
                </div>
                <FollowersList projectId={this.id}/>
            </React.Fragment>
            }
            
        </div> );
    }
}
 
const mapStateToProps = ({projectDetail}) => ({projectDetail})
export default connect(mapStateToProps,{getProjectDetails})(ProjectDetail);