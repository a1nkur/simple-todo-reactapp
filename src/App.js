import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import "./index.css";

const App = () => {
  const [todos, setTodos] = useState([
    { body: "lorem ipsum ...", id: uuidv4(), showClearIcon: false },
    { body: "lorem ipsum ...", id: uuidv4(), showClearIcon: false },
    { body: "lorem ipsum ...", id: uuidv4(), showClearIcon: false },
  ]);

  // Add items to the state
  const addTodo = data => {
    setTodos([...todos, { body: data, id: uuidv4(), showClearIcon: false }]);
  };

  // Delete items from the state
  const deleteTodo = id => {
    const filteredArr = todos.filter(eachItem => eachItem.id !== id);
    setTodos([...filteredArr]);
  };

  // Toggle "showClearIcon" property
  const toggleShowClearIcon = id => {
    let index = null;

    for (let i = 0; i < todos.length; i++) {
      if (id === todos[i].id) {
        index = i;
        break;
      }
    }

    let newArr = [...todos];
    const toggleStatus = newArr[index].showClearIcon;
    newArr[index].showClearIcon = !toggleStatus;

    setTodos([...newArr]);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="card-panel cyan-text center">Todo Application</h1>
        {todos.length === 0 ? (
          <div className="card-panel">
            No tasks here. How about adding somthing to this list?
          </div>
        ) : (
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            toggleShowClearIcon={toggleShowClearIcon}
          />
        )}
        <AddTodo addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
