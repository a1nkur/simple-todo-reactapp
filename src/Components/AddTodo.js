import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [inputData, setInputData] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    
    addTodo(inputData);
    setInputData("");
  };

  return (
    <div className="card-panel">
      <form onSubmit={handleSubmit}>
        <div className=".input-field">
          <input
            type="text"
            placeholder="Add things to do"
            value={inputData}
            onChange={e => setInputData(e.target.value)}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
