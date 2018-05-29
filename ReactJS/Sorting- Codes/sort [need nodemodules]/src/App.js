import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CoinsList } from './components/CoinsList.js'

class App extends Component {
  render() {
    return (
      <div>
        <CoinsList />
      </div>
    );
  }
}

export default App;
