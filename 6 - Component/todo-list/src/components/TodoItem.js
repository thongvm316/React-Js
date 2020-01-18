import React, { Component } from 'react';
// tuong tu: const react = require('react');

class TodoItem extends Component {
  render() {
      return (
        <div className="TodoItem">
            <p>{this.props.title}</p>
        </div>
      );
  }
}

export default TodoItem;