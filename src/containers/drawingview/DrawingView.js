import React, { Component } from 'react';
import { connect } from "react-redux";


class DrawingView extends Component {
    state = {  }
    render() { 
        return ( <div>

        </div> );
    }
}
const mapStateToProps = ({projectDetail}) => ({ projectId:projectDetail.id,
                                                drawings:projectDetail.drawings})
export default connect(mapStateToProps)(DrawingView);