import React from "react";

const TodoList = ({ todos, deleteTodo, toggleShowClearIcon }) => {
  const handleDelete = id => {
    deleteTodo(id);
  };

  // Handle onMouseEnter event
  const handleMouseEnter = id => {
    toggleShowClearIcon(id);
  };

  // Handle onMouseLeave event
  const handleMouseLeave = id => {
    toggleShowClearIcon(id);
  };

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4>You have {todos.length} tasks to get through...</h4>
      </li>
      {todos.map(eachItem => {
        return (
          <li
            className="collection-item"
            key={eachItem.id}
            onMouseEnter={() => handleMouseEnter(eachItem.id)}
            onMouseLeave={() => handleMouseLeave(eachItem.id)}
          >
            {eachItem.body}{" "}
            {eachItem.showClearIcon ? (
              <a
                href="#!"
                class="secondary-content"
                onClick={() => handleDelete(eachItem.id)}
              >
                <i class="material-icons right">clear</i>
              </a>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
