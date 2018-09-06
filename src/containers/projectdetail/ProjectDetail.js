import React, { Component } from 'react';
import { connect } from "react-redux";
import { getProjectDetails } from "../../redux/actions/projectDetail";
import DrawingList from "../../components/DrawingList"
import LoadingSpinner from '../../components/LoadingSpinner'
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
                <h2>{projectDetail.name}</h2>
                <DrawingList />
            </React.Fragment>
            }
            
        </div> );
    }
}
 
const mapStateToProps = ({projectDetail}) => ({projectDetail})
export default connect(mapStateToProps,{getProjectDetails})(ProjectDetail);