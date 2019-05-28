import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import logo from './Logo.png';
// import SteamCo from './Steam.png';
import SteamCo from './steam-icon.png';
import App from './App';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'

class Signin extends Component {
    constructor(props) {
      super(props);
      this.state = {
        sock: props.test,
        endpoint: "http://127.0.0.1:4001"
      };
    }
}

    export default Signin;
