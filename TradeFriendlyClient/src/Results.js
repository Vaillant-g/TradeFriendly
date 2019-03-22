import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import './App.css';
import { TradeFriendlyFooter } from './Footer';
import { TradeFriendlyHeader } from './Header'
import { TradeFriendlySearchBar } from './SearchBar'
import { AccueilMessage } from './AccueilMessage'
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Results extends Component {

  render() {
    const response = this.state;
    return (
      <Button><Link to ="/">Home</Link></Button>
    );
  }
}

export default App;
