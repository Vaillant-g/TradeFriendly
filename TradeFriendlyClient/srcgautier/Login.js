import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import logo from './Logo.png';
// import SteamCo from './Steam.png';
import SteamCo from './steam-icon.png';
import App from './App';
import './App.css';
import { TradeFriendlyFooter } from './Footer';
import { TradeFriendlyHeader } from './Header'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import {
  FormGroup,
  FormControl,
  Jumbotron
} from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sock: props.test,
      endpoint: "http://127.0.0.1:4001"
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    let tmp = { Login: this.Login.value, Password: this.Password.value, steamId: this.steamId.value };
    console.log(tmp);
    this.state.sock.emit('SignIn', tmp);
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <Jumbotron id="LoginArea">
            <form onSubmit={this.handleSubmit}>
              <div class="form-group">
                <label>
                  Login:
              <input type="text" ref={(Login) => this.Login = Login} class="form-control" placeholder="Enter Username" />
                </label>
              </div>

              <div class="form-group">
                <label>
                  Password:
              <input type="password" ref={(Password) => this.Password = Password} class="form-control" placeholder="Password" />
                </label>
              </div>
              <div class="form-group">
                <label>
                  steamId:
              <input type="text" ref={(steamId) => this.steamId = steamId} class="form-control" placeholder="SteamId64" />
                </label>
              </div>
              <input type="submit" value="Submit" class="btn btn-primary" />
            </form>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
export default Login;
