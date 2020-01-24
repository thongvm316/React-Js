  import React, { Component } from 'react';
  // import logo from './logo.svg';
  import './App.css';
  import TodoItem from './components/TodoItem';


  class App extends Component {
    constructor() {
      super();
      this.state.todoItems = [
        { title: 'Da bong', isComplete: true },
        { title: 'Cafe', isComplete: true },
        { title: 'Film' }
      ];
    }; // luu data vao constructor Fn
    render() {
      // if (this.todoItems.length > 0) {
      //   return (
      //     <div className="App">
      //       {
      //         this.todoItems.map((item, index) => 
      //         <TodoItem key={index} item={item}/>)
      //       }
      //     </div>
      //   );  
      // } else {
      //   return (
      //     <div className="App">Nothing Here</div>
      //   );
      // }    
      //// cach 2 de render khi todoItem hava no data
      onItemClicked() {
        this.
      }
      return (
        <div className="App">
          {this.todoItems.length > 0 && this.todoItems.map((item, index) => (
            <TodoItem key={index} item={item} onClick={this.onItemClicked}/>
          ))}
          {this.todoItems.length === 0 && 'Nothing Here'} 
        </div>
      );
    }
  }
 

  export default App;
