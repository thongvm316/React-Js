  import React, { Component } from 'react';
  // import logo from './logo.svg';
  import './App.css';
  import TodoItem from './components/TodoItem';


  class App extends Component {
    constructor() {
      super();
      this.todoItems = [
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
      return (
        <div className="App">
          {this.todoItems.length > 0 && this.todoItems.map((item, index) => (
            <TodoItem key={index} item={item}/>
          ))}
          {this.todoItems.length === 0 && 'Nothing Here'} 
        </div>
      );
    }
  }
  ////// cach viet truyen thong
  // function App() {
  //   return (
  //     <div className="App">
  //         <TodoItem title="Da bong"/> 
  //         <TodoItem title="Cafe"/> 
  //         <TodoItem title="Film"/> 
  //     </div>
  //   );


  // class App extends Component {
  //   render() {
  //     return(
  //       <div className="App">
  //         <TrafficLight/>
          
  //       </div>
  //     );
  //   }
  // }

  export default App;
