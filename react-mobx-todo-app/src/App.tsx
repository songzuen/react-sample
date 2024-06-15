import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import TodoStore from './TodoStore';

function App() {
    const todoStore = new TodoStore()
    return (
      <div className="App">
        <TodoList todoStore={todoStore} />
      </div>
    );
}

export default App;
