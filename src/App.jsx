import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // When the component mounts, fetch todos from local storage
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    console.log("Fetched from local storage:", storedTodos);

    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const addTodo = () => {
    if (input) {
      const updatedTodos = [...todos, input];
      setTodos(updatedTodos);
      setInput('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Simple To-Do List</h1>
      <div className='todoadd'>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;