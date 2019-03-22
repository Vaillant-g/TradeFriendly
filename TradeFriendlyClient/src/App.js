import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import './App.css';
import { TradeFriendlyFooter } from './Footer';
import { TradeFriendlyHeader } from './Header'
import { TradeFriendlySearchBar } from './SearchBar'
import { AccueilMessage } from './AccueilMessage'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:4001"
    };
    this.sock = false;


    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    this.sock = socket;

  }

  // componentWillMount = () => {
  //   const { endpoint } = this.state;
  //   const socket = socketIOClient(endpoint);
  //   this.sock = socket; 
  //}

  render() {
    const response = this.state;
    return (
      <div className="App">
        <TradeFriendlyHeader test={this.sock} />
        <div className="App-Content">
          <AccueilMessage/>
          <TradeFriendlySearchBar />
        </div>
        <TradeFriendlyFooter />
      </div>
    );
  }
}

export default App;
