import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import './App.css';
import { TradeFriendlyFooter } from './Footer';
import { TradeFriendlyHeader } from './Header'
import { AboutUs } from './AboutUs'
import { Home } from './Home'
import { RecentSearches } from './RecentSearches'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



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
        <Router>
          <div>
            <TradeFriendlyHeader test={this.sock} />
            <Route exact path="/" component={() => <Home test={this.sock}/>}/>
            <Route path="/RecentSearches" component={RecentSearches} />
            <Route path="/AboutUs" component={AboutUs} />
          </div>
        </Router>
        <TradeFriendlyFooter />
      </div>
    );
  }
}

export default App;
