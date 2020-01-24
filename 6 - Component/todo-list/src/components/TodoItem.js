import React, { Component } from 'react';
// tuong tu: const react = require('react');
import './Todoitem.css';
import classNames from 'classnames';

class TodoItem extends Component {
  // constructor(props) {
  //   super(props);
  //     this.onItemClick = this.onItemClick.bind(this);
  //  }
  // onItemClick() {
  //   console.log(this.props.item);
  // }

  render() {
    const  {item, onClick}  = this.props;
    console.log(item)
    // let className = 'TodoItem ';
    // if (item.isComplete) {
    //   className += 'TodoItem-complete';
    // }
    return (
      <div onClick={onClick} className={classNames('TodoItem', { 
        'TodoItem-complete': item.isComplete
       })}> 
          <p>{this.props.item.title}</p>
      </div>
    ); // onclick in HTML --> onClick in React Js
  }
}

export default TodoItem;