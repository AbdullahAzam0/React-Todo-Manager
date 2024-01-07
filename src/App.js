import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim() !== '') {
      const newTodo = {
        text: task,
        status: 'pending', 
        timestamp: new Date().toLocaleString(),
      };

      setTodos([...todos, newTodo]);
      setTask('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const toggleStatus = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].status = updatedTodos[index].status === 'pending' ? 'completed' : 'pending';
    setTodos(updatedTodos);
  };

  const editTodo = (index, newText) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = newText;
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <div>
              <input
                type="checkbox"
                checked={todo.status === 'completed'}
                onChange={() => toggleStatus(index)}
              />
              <span className={todo.status === 'completed' ? 'completed' : ''}>{todo.text}</span>
              <span className="timestamp">Added on: {todo.timestamp}</span>
            </div>
            <div>
              <button onClick={() => editTodo(index, prompt('Edit task:', todo.text))}>Edit</button>
              <button onClick={() => removeTodo(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
