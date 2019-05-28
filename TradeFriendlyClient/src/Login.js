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
    FormControl
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
        let tmp = {Login: this.Login.value, Password: this.Password.value, steamId: this.steamId.value};
        console.log(tmp);
        if (tmp.Login && tmp.Password && tmp.steamId)
            this.state.sock.emit('SignIn', tmp);
        this.state.sock.on("SignIn", function(data) {
            if (data == "KO"){
                alert("User already exist");
                
            }
        });
        
    }


    handleSubmitLog(e) {
        e.preventDefault();
        let tmp = {Login: this.Login.value, Password: this.Password.value};
        if (tmp.Login && tmp.Password)
            this.state.sock.emit('LogIn', tmp);
        this.state.sock.on("LogIn", function(data) {
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
            <div>
            <Button variant="primary" onClick={this.toggleLogIn}>
            Login
            </Button>
            <Button variant="primary" onClick={this.toggleSignIn}>
            Sign in
            </Button>
            {signLog == 1 && (
            <form onSubmit={this.handleSubmitLog}>
            <label>
              Login:
              <input type="text" ref={(Login) => this.Login = Login} />
            </label>
            <label>
              Password:
              <input type="password" ref={(Password) => this.Password = Password} />
            </label>
            <input type="submit" value="Submit" />
          </form>
            )}
            { signLog == 2 && (
            <form onSubmit={this.handleSubmit}>
            <label>
              Login:
              <input type="text" ref={(Login) => this.Login = Login} />
            </label>
            <label>
              Password:
              <input type="password" ref={(Password) => this.Password = Password} />
            </label>
            <label>
              steamId:
              <input type="text" ref={(steamId) => this.steamId = steamId} />
            </label>
            <input type="submit" value="Submit" />
          </form>
            )}
        </div>
        );
    }
}
    export default Login;
