import React,{Component} from 'react';
import { connect } from "react-redux";
import ProjectListItem from "./ProjectListItem"
import LoadingSpinner from './LoadingSpinner'
import { getProjects } from "../redux/actions/projects";
import "./styles/ProjectList.css"

class ProjectList extends Component{
    state = {
        loading: true
    }
    componentDidMount(){
        this.setState({loading: true})
        this.props.getProjects()
        .then(()=>{
            this.setState({loading: false})
        })
    }
    render(){
        const {loading} = this.state
        return ( 
        <React.Fragment>
            {loading ? <LoadingSpinner /> :
                <table className="project-list">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date Updated</th>
                        </tr>
                    </thead>
                    <tbody>   
                        {this.props.projects.map(project=><ProjectListItem key={project.id} project={project}/>)}
                    </tbody>
                </table>}
        </React.Fragment>
            
        )
    }
}

const mapStateToProps = ({projects}) => ({projects})
 
export default connect(mapStateToProps, {getProjects})(ProjectList);