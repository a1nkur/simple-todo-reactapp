import React, { Component } from "react";
import Task from "./Task";
import AddTaskForm from "./AddTaskForm";

export default class Todo extends Component {
  state = {
    todos: [
      { id: 0, task: "lorem ipsum" },
      { id: 1, task: "lorem ipsum" },
      { id: 2, task: "lorem ipsum" },
    ],
  };

  deleteTask = id => {
    const filteredTodos = this.state.todos.filter(task => {
      return id !== task.id;
    });

    this.setState({ todos: filteredTodos });
  };

  addTask = newTask => {
    newTask.id = Math.floor(Math.random() * 99999 + 1);
    const todos = [...this.state.todos, newTask];
    this.setState({ todos: todos });
  };

  render() {
    return (
      <div>
        <Task todos={this.state.todos} deleteTask={this.deleteTask} />
        <AddTaskForm addTask={this.addTask} />
      </div>
    );
  }
}
