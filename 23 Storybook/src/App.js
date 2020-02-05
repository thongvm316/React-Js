import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeeklySongListItem from '../src/components/WeeklySongListItem';

function App() {
  return (
    <div className="App">
        <WeeklySongListItem
        order="01"
        title="Em Không Thể"
        singer="Tiên Tiên, Touliver"
        viewCount={3000}
      />
    </div>
  );
}

export default App;
