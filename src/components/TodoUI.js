import React from 'react';

const Todoui=({Todo,handledelete})=>{
    const todolist = Todo.length ?(
         Todo.map(variable =>{
            return(
                <div className="collection-item" key = {variable.id}>
                <div className = "container" onClick = {()=>{handledelete(variable.id)}}>
                  <ul className = "collection">
                    <li className = "collection-item">
                    <span >{variable.content}</span>
                    </li>
                    </ul>
                </div>
                </div>
            );

         })
        
    ):(<p>You have no todo list </p>);
 
    
        
  
    return(
        <div className = "container">
        <div className = "todo-app center">
      
        
        {todolist}
       
        </div>
        </div>
    );
}
export default Todoui;
