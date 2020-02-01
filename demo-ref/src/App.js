import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component  {
  constructor(props) {
    super(props)
    this.inputElement = React.createRef();

    // setTimeout(() => this.inputElement.current.focus(), 2000);
    // setTimeout(() => {
    //   this.inputElement.current.focus();
    // }, 2000);
    // debugger;
    // this.inputElement.current.focus(); // nok, value = null, vi element chua dc create
   }

  componentDidMount(){ // ham nay dung de, ham create element roi se chay
    debugger;  
    this.inputElement.current.focus();
  }

  render() {
    return (
      <div className="App">
        <input type="text" ref={this.inputElement}/>
      </div>
    );
  }
}


export default App;
