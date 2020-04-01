import React, { Component } from 'react'

class Addtodo extends Component{
    state = {
        content : ''
    }
    handleonChange=(e)=>{
        this.setState({content : e.target.value});
        
    }
    handleonSubmit=(e)=>{
        e.preventDefault();
        this.props.addtodo(this.state);
        this.setState({
            content: ''
          })
    }

    render(){
        return(
            <div>
            <form onSubmit ={this.handleonSubmit}>
            <label className = "bold">Add new TODO</label>
            <input type="text"  onChange={this.handleonChange} value = {this.state.content}/>

            </form>

            </div>
        )
    }
}

export default Addtodo