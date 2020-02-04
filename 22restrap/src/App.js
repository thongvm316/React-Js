import React from 'react';
import { Button } from 'reactstrap';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button outline block={true} color="primary">primary</Button>{' '}
      <Button outline={false} color="secondary">secondary</Button>{' '}
      <Button outline color="success">success</Button>{' '}
      <Button outline color="info">info</Button>{' '}
      <Button outline color="warning">warning</Button>{' '}
      <Button outline color="danger">danger</Button>
    </div>
  );
}

export default App;
