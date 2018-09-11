import React, { Component } from 'react';

class EditableField extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: this.props.value,
            edit: false
        }
    }

    onHandleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onHandleSave = (e) => {
        this.setState({
            edit: false
        })
        this.props.onSave(this.state.value)
    }

    render() { 
        const {edit, value} = this.state
        const {children} = this.props
        return ( 
            <span>
                {
                    !edit?children:
                    <input type="text"
                            value={value}
                            name="value"
                            onChange={this.onHandleChange}/>
                }
                {
                    !edit?<i className="fas fa-pencil-alt" onClick={()=>this.setState({edit:true})}></i>:
                    <i className="fas fa-save" onClick={this.onHandleChange}></i>
                }
                
            </span>
        );
    }
}
 
export default EditableField;