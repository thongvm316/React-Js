import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';

class App extends Component {
  render() {
    const carinfo = {name: '324', model: "Mustang"};
    return (
      <div className="App">
        <Accordion heading="Heading" content="MinhThongytR" brand={carinfo}/>
      </div>
    );
  }
}

export default App;
