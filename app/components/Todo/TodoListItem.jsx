import React, { Component } from 'react';

class TodoListItem extends Component {

  constructor() {
    super();
    this.state = {
      isEditing: false
    };
  }

  renderTaskSection() {
    const { task , isCompleted } = this.props;

    const taskStyle = {
      color: isCompleted ? 'green': 'red',
      cursor: 'pointer'
    };

    if (this.state.isEditing) {
      return(
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text"
              defaultValue={task}
              ref={(input) => {this.textInput = input;}}
            />
          </form>
        </td>
      )
    }

    return(
      <td style={taskStyle}
          onClick={this.props.toggleTask.bind(this, task)}
        >
        {task}
      </td>
    )
  }

  renderActionSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <button
            onClick={this.onSaveClick.bind(this)}
            >
            Save
          </button>
          <button
            onClick={this.onToogleClick.bind(this)}>
            Cancel
          </button>
        </td>
      )
    }
    return (
      <td>
        <button
          onClick={this.onToogleClick.bind(this)}>
          Edit
        </button>
        <button
          onClick={this.props.deleteTask.bind(this, this.props.task)}
          >
          Delete
        </button>
      </td>
    )
  }

  render() {
    return (
      <tr>
        {this.renderTaskSection()}
        {this.renderActionSection()}
      </tr>
    )
  }

  onToogleClick() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  onSaveClick(e) {
    e.preventDefault();

    const oldTask = this.props.task;
    const newTask = this.textInput.value;
    this.props.saveTask(oldTask, newTask);
    this.setState({
      isEditing: false
    });
  }
}

export default TodoListItem;
