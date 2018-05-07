import React, { Component } from 'react';
import AddTask from './AddTask';
import TodoList from './TodoList';

class App extends Component {
    render() {
      return (
        <div>
          <h2>ToDo List:</h2>
          <AddTask/>
          <TodoList/>
        </div>
      );
    }
  }
  
  export default App;