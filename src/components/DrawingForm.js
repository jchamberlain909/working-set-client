import React, { Component } from 'react';
import './styles/DrawingForm.css'
import {addProjectDrawing} from '../redux/actions/drawings'
import { connect } from "react-redux";


class DrawingForm extends Component {
    constructor(props){
        super(props)
        this.state = { 
            type: "",
            file: false
        }
        this.fileInput = React.createRef();
    }
    

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onFileChangeHandler = (e) => {
        this.setState({file: true})
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        this.props.addProjectDrawing(this.props.projectId,{
            drawing_type: this.state.type,
            drawing_file: this.fileInput.current.files[0]
        })
    }
    
    render() { 
        return ( 
        <form className="drawing-form" onSubmit={this.onSubmitHandler}>
            <label>Add New Drawing: </label>
            <input type="text" value ={this.state.type}
                 name="type" onChange={this.onChangeHandler}
                 placeholder="Drawing Type (A, S, MEP, etc.)"/>
            <input type="file" onChange={this.onFileChangeHandler} ref={this.fileInput}/>
            <button>Submit</button>
        </form> );
    }
}
 
export default connect(null, {addProjectDrawing})(DrawingForm);