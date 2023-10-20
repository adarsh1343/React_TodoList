import React, { useState } from 'react';
import './App.css';

function App() {

  // add usestates to save input and todos
  const [input, setInput] = useState("");
  const [todos, settodos] = useState([]);

  // When the component mounts, fetch todos from local storage


  // addTodo Function
  const addToDo = () => { //parenthesis is for the paramaters of the function
    if (input) {
      const newtodo = [...todos, input]; //takes the previous values of the array todos and adds the value from input to it and saves it in newtodo array
      settodos(newtodo);
      setInput("");
    }
  }

  // Remove Todo Function
  const removeTodo = (index) => {
    const newtodo = [...todos];
    newtodo.splice(index, 1);
    settodos(newtodo);
  }

  //create a UI with
  return (
    <div className="App">
      <h1>Simple To-Do List</h1>
      <div className='todoadd'>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}// e creates a function to execute
          placeholder="Enter a new task..."
        />
        <button onClick={addToDo}>Add</button>
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