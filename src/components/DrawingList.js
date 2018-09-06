import React, { Component } from 'react';
import { connect } from "react-redux";

import DrawingForm from './DrawingForm'
import './styles/DrawingList.css'

class DrawingList extends Component {
    
    render() { 
        const {drawings, projectId} = this.props
        return ( 
        <div className="drawing-view">
            <table className="drawing-list">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Date Added</th>
                        <th>Followers</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {drawings.map(drawing=><li key={drawing.id}>{drawing.type}</li>)}    
                </tbody>
            </table>
            <DrawingForm projectId={projectId}/>
        </div>);
    }
}


const mapStateToProps = ({projectDetail}) => ({ projectId:projectDetail.id,
    drawings:projectDetail.drawings})
export default connect(mapStateToProps)(DrawingList);