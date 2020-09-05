import React from "react";

const Task = ({ todos, deleteTask }) => {
  const todoList = todos.length ? (
    todos.map(eachTask => {
      return (
        <div className="collection-item" key={eachTask.id}>
          <span onClick={() => deleteTask(eachTask.id)}>{eachTask.task}</span>
        </div>
      );
    })
  ) : (
    <p className="center">No Task available.</p>
  );
  return <div className="task collection">{todoList}</div>;
};

export default Task;