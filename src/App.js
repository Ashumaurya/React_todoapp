import React, { Component } from 'react';
import Todoui from './components/TodoUI';
import Addtodo from './components/Addtodo'


class App extends Component {
  state = {
    Todo : [
      {id: 1 , content : "Buy Something"},
      {id: 2 , content : "DO Something"},
    ]
  }
  handledelete=(id)=>{
    //console.log(id);
    let newTodo = this.state.Todo.filter(Todoui=>{
      return Todoui.id !== id;

    });
    this.setState({
      Todo : newTodo
    });
}
addtodo=(todo)=>{
  todo.id = Math.random();
  let newTodo = [...this.state.Todo,todo]; // todo are the new states we have added
  this.setState({
    Todo :newTodo
  });

}

  render(){
  return (
    <div className="todo-app container">
    <h1 className="center black-text bold-text"> TODO LISTS </h1>
    
    
    <Todoui Todo = {this.state.Todo} handledelete ={this.handledelete} />
    <Addtodo  addtodo = {this.addtodo}/>
    
    
      
    </div>
  );
}
}
export default App;
