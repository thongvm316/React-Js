import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import  TrafficLight from './components/TrafficLight';

// function App() {
//   return (
//     <div className="App">
//         <TrafficLight/>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
          <TrafficLight/>
      </div>
    );
  } 
}


export default App;
