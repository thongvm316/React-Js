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
      return (
        <div className="App">
          {
            this.todoItems.map((item, index) => 
            <TodoItem key={index} item={item}/>)
          }
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

  export default App;
