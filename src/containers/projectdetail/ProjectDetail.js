import React, { Component } from 'react';
import { connect } from "react-redux";
import { getProjectDetails } from "../../redux/actions/projectDetail";

class ProjectDetail extends Component {
    constructor(props){
        super(props)
        this.id = props.match.params.id
    }
   
    componentDidMount(){
        this.props.getProjectDetails(this.id)
    }

    render() { 
        return ( 
        <div>
            
        </div> );
    }
}
 
export default connect(null,{getProjectDetails})(ProjectDetail);