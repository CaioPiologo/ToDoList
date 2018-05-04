import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends Component {
    render() {
      return (
        <div>
          <h2>ToDo List:</h2>
          <AddTodo/>
          <TodoList/>
        </div>
      );
    }
  }
  
  export default App;