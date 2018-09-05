import React, { Component } from 'react';

class DrawingList extends Component {
    
    render() { 
        const {drawings} = this.props
        return ( 
        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Date Added</th>
                    <th>Followers</th>
                    <th>Actions</th>
                </tr>
                <tbody>
                    {drawings.map(drawing=><li key={drawing.id}>{drawing.type}</li>)}
                </tbody>
            </thead>

        </table> );
    }
}


 
export default (DrawingList);