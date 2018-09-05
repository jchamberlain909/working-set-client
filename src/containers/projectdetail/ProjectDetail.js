import React, { Component } from 'react';
import { connect } from "react-redux";
import { getProjectDetails } from "../../redux/actions/projectDetail";
import DrawingView from "../drawingview/DrawingView"
import LoadingSpinner from '../../components/LoadingSpinner'

class ProjectDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading: false
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
        <div>
            {loading? <LoadingSpinner />:
            <React.Fragment>
                <h2>{projectDetail.name}</h2>
                <DrawingView />
            </React.Fragment>
            }
            
        </div> );
    }
}
 
const mapStateToProps = ({projectDetail}) => ({projectDetail})
export default connect(mapStateToProps,{getProjectDetails})(ProjectDetail);