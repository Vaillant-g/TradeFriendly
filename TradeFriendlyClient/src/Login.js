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
      endpoint: "http://127.0.0.1:4001",
      signLog: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitLog = this.handleSubmitLog.bind(this);
    this.toggleSignIn = this.toggleSignIn.bind(this);
    this.toggleLogIn = this.toggleLogIn.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let tmp = { Login: this.Login.value, Password: this.Password.value, steamId: this.steamId.value };
    console.log(tmp);
    if (tmp.Login && tmp.Password && tmp.steamId)
      this.state.sock.emit('SignIn', tmp);
    this.state.sock.on("SignIn", function (data) {
      if (data == "KO") {
        alert("User already exist");

      }
    });

  }


  handleSubmitLog(e) {
    e.preventDefault();
    let tmp = { Login: this.Login.value, Password: this.Password.value };
    if (tmp.Login && tmp.Password)
      this.state.sock.emit('LogIn', tmp);
    this.state.sock.on("LogIn", function (data) {
      if (data == "KO")
        alert("Wrong username or password");
      else
        localStorage.setItem("login", data);
    });

  }

  toggleSignIn() {
    const { signLog } = this.state;
    this.setState({
      signLog: 2,
    });
  }

  toggleLogIn() {

    const { signLog } = this.state;
    this.setState({
      signLog: 1,
    });
  }

  render() {
    const { signLog } = this.state;
    return (
      <div class="container">
        <div class="row loginoption">
          <div class="col">
            <Button variant="light" onClick={this.toggleLogIn}>
              Login
            </Button>
          </div>
          <div class="col">
            <Button variant="light" className="float-right" onClick={this.toggleSignIn}>
              Sign in
            </Button>
          </div>
        </div>
        <div class="row">
          {signLog != 2 && (
            <Jumbotron id="LoginArea">
              <form onSubmit={this.handleSubmitLog}>
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
              <input type="submit" value="Submit" class="btn btn-dark" />

              </form>
            </Jumbotron>
          )}
          {signLog == 2 && (
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
              <input type="submit" value="Submit" class="btn btn-dark" />
            </form>
          </Jumbotron>
          )}
        </div>
      </div>
    );
  }
}
export default Login;
