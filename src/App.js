import React from "react";
import Todo from "./Components/Todo";
import "./index.css";

const App = () => {
  return (
    <div className="App container">
      <h1 className="center teal-text text-darken-1 card-panel">
        Todo Application
      </h1>
      <Todo />
    </div>
  );
};

export default App;
