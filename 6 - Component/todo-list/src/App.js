import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';


class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      " Di da bong", 
      " Bong chuyen", 
      " Bowling"
    ];                  
  }   
  render() {
    return (
      <div className="App">
        {
          this.todoItems.map((item, index) => <TodoItem key={index} title={item}/>)
        }
      </div>
    );  
  }
}
////// cach viet truyen thong
// function App() {
//   return (
//     <div className="App">
//         <TodoItem /> 
//         <TodoItem /> 
//         <TodoItem /> 
//     </div>
//   );

export default App;
