import React, { Component } from 'react';
import './TrafficLight.css';
import classNames from 'classnames';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TrafficLight extends Component {
  constructor() {
    super();
    this.state = {
      currentColor: RED
    }; // this.currentColor = RED; // state, gia tri, trang thai noi tai cua component, do gia tri no se thay doi lien tuc, nen phai set state nhu ben tren
    // console.log(this.state.currentColor);
    setInterval(() => {
      this.setState({ // muon gia tri state thay doi trong ham setinterval nay --> must su dung setState
        currentColor: this.getNextColor(this.state.currentColor)
      });
      // this.state.currentColor duoc phep get, truyen vao Fn, nhung ko cho no bang cai gi do.
      // props, state, khi thay doi, ham render ben duoi be auto call.
    }, 1000); 
  }

  getNextColor(color) {
    switch (color) {
      case RED:
          return ORANGE; 
      case ORANGE:
          return GREEN;          
      default:
          return RED;
    }
  }
 //problem: khi this.currentColor, ham render() nok change
  render() {
    const { currentColor } = this.state;
    console.log(currentColor);
    return (
    <div className="TrafficLight">
        <div className={classNames('bulb', 'red', {active: currentColor === RED})}/>
        <div className={classNames('bulb', 'orange', {active: currentColor === ORANGE})}/>
        <div className={classNames('bulb', 'green', {active: currentColor === GREEN})}/>
    </div>  
    );    
  }
}

export default TrafficLight;


