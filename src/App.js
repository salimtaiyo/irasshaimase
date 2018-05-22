import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
      this.state = {
        message: 'TODO',
        newTodo: '',
        todos: [
          {
            title: "shslom push",
            done: false
          },
          {
            title: "become a great frontend developer",
            done: true
          }
        ]
      }

      this.formSubmitted = this.formSubmitted.bind(this);
      this.newTodoChanged = this.newTodoChanged.bind(this);
    
  }
  
  newTodoChanged(event){
    this.setState({
      newTodo: event.target.value
    })
    
  }
  formSubmitted(event){
    event.preventDefault();

    this.setState({
      // newTodo:'',
      todos:[...this.state.todos, {
       title: this.state.newTodo,
       done: false
      }]
    })
    
  }
  render() {
    return (
      <div className="App">
       <h1> {this.state.message}</h1>
       <form onSubmit={this.formSubmitted}>
        <label htmlFor="newTodo"> New Todo</label>
        <input onChange={this.newTodoChanged} id="newTodo" name="newTodo" value={this.state.newTodo}/>
        <button type="submit"> Submit </button>
       </form>

       <ul>
          {this.state.todos.map( (todo) =>{
            return <li key={todo.title}> {todo.title}</li>
          }
            
          )}
       </ul>
      </div>
    );
  }
}

export default App;
