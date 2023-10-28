import React from 'react';
import './App.css';
import Hangman from './Components/Hangman.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Hangman />
      </div>
    );
  }
}

export default App;
