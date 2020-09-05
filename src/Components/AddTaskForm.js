import React, { Component } from "react";

export default class AddTaskForm extends Component {
  state = {
    task: null,
  };

  changeHandler = e => {
    this.setState({
      task: e.target.value,
    });
  };
  
  submitHandler =(e) => {
      e.preventDefault();
      this.props.addTask(this.state);
      this.setState({ 
          task: ''
      })
  }

  render() {
    return (
      <div className="card-panel">
        <form onSubmit={this.submitHandler}>
          <label htmlFor="new-task">Add New Task</label>
          <input type="text" id="new-task" onChange={this.changeHandler} value={this.state.task}/>
        </form>
      </div>
    );
  }
}
