import React, { Component } from 'react';
import _ from 'lodash';

import TodoListHeader from './TodoListHeader';
import TodoListItem from './TodoListItem';

class TodoList extends Component {

  renderItems() {

    const props = _.omit(
      this.props,
      'todos'
    );

    return _.map(this.props.todos,
      (todo, index) => {
        return(
          <TodoListItem
            key={index}
            {...todo}
            {...props}
          />
        )
      }
    )
  }

  render() {
    return (
      <div>
        <table>
          <TodoListHeader/>
          <tbody>
            {this.renderItems()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default TodoList;
