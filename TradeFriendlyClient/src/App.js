import React, { Component } from 'react';
import './App.css';
import {TradeFriendlyFooter} from './Footer';
import {TradeFriendlyHeader} from './Header'
import {TradeFriendlySearchBar} from './SearchBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TradeFriendlyHeader />
        <div className="App-Content">
          <TradeFriendlySearchBar />
        </div>
        <TradeFriendlyFooter />
      </div>
    );
  }
}

export default App;
