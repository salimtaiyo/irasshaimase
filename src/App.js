import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    message: 'TODO'
  }
  render() {
    return (
      <div className="App">
       <h1> {this.state.message}</h1>
       <form>
        <label htmlFor="newTodo"> New Todo</label>
        <input id="newTodo" name="newTodo"/>
       </form>

      </div>
    );
  }
}

export default App;
