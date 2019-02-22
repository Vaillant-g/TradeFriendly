import React, { Component } from 'react';
import './App.css';
import {TradeFriendlyFooter} from './Footer';
import {TradeFriendlyHeader} from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TradeFriendlyHeader />
        <TradeFriendlyFooter />
      </div>
    );
  }
}

export default App;
