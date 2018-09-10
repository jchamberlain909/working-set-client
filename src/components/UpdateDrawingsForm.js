import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {updateDrawings} from '../redux/actions/projectDetail'
import './styles/UpdateDrawingsForm.css'

class UpdateDrawingsForm extends Component {
    constructor(props){
        super(props)
        this.fileInput = React.createRef();
        this.state = { 
            message: '',
            upload: true,
            file_url: ""
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleFileUploadState = (e)=>{
        e.preventDefault()
        this.setState({upload:true})
    }
    handleLinkState = (e) => {
        e.preventDefault()
        this.setState({upload:false})
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        let data = new FormData()
        data.append('message', this.state.message)
        if (this.state.upload) {
            data.append('drawing',this.fileInput.current.files[0])
        }else{
            data.append('drawing_url', this.state.file_url)
        }
        this.props.updateDrawings({
            projectId:this.props.projectId,
            formData: data
        }).then(()=>{
            this.props.history.push(`/projects/${this.props.projectId}`)
        })

    }

    render() { 
        return ( 
        <form className="drawing-form">
            <h3>Push New Drawings</h3>
            <label htmlFor="message">Update Message</label>
            <textarea type="text-area" 
                    rows={5}
                    cols="100"
                    value={this.state.message}
                    name="message"
                    onChange={this.onChangeHandler}
                    />
            <label>Upload Method</label>
            <div className="file-input">
                <Button.Group>
                    <Button
                        active={this.state.upload}
                        onClick={this.handleFileUploadState}>File Upload</Button>
                    <Button.Or />
                    <Button 
                        active={!this.state.upload}
                        onClick={this.handleLinkState}>Cloud Link</Button>
                </Button.Group>
                {
                    this.state.upload?
                    <input type="file" id="file" ref={this.fileInput}/>:
                    <input type="text"
                        placeholder="File URL"
                        value={this.state.file_url}
                        name="file_url"
                        onChange={this.onChangeHandler}
                    />
                }
            </div>
            <button className="submit" onClick={this.onSubmitHandler}>Submit</button>
        </form> );
    }
}
 
export default connect(null, {updateDrawings})(UpdateDrawingsForm);