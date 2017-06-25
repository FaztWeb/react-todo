import React, { Component } from 'react';
import _ from 'lodash';

class TodoForm extends Component{
  constructor(props) {
    super();
    this.state = {
      error: null
    };
  }

  renderError() {
    if (!this.state.error) { return null;}
    return <div style={{color: 'red'}}>
      {this.state.error}
    </div>
  }

  render() {
    return(
      <form onSubmit={this.handleCreate.bind(this)}>
        <input
          ref={(input) => {this.textInput = input;}}
          type="text"
          placeholder="What do I need to do?"/>
        <button>Create</button>
        {this.renderError()}
      </form>
    )
  }

  handleCreate(e) {
    e.preventDefault();
    let task = this.textInput.value;
    let validateInput = this.validateInput(task);

    if (validateInput) {
      this.setState({error: validateInput});
      return;
    }
    this.setState({error: null });
    this.props.createTask(task);
    this.textInput.value = '';
  }

  validateInput(task){
    if (!task) {
      return 'Please enter a Task';
      console.log(_.find(this.props.todos, todo => todo.task === task));
    } else if (_.find(this.props.todos, todo => todo.task === task)) {
      return 'Task already Exists';
    } else {
      return null;
    }
  }
}

export default TodoForm;
