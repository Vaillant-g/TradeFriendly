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

function ShowAlert(data) {
    //alert("test");
    console.log(data.test);
    //const socket = socketIOClient("http://127.0.0.1:4001");
    data.test.emit('steamCo', "Connexion");
    data.test.on('Return data', function(data) {
        console.log(data);
    });
}

const ImgStyle = {
    width: 127
};

export function TradeFriendlyHeader(data) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <NavLink to="/"><Image src={logo} className="NavbarImage" name="logo" alt="logo" /></NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><NavLink to="RecentSearches">Recent searches</NavLink></Nav.Link>
                    <Nav.Link><NavLink to="AboutUs">About us</NavLink></Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link><NavLink className="SteamCoButton" to="Login">Login</NavLink></Nav.Link>

                    {/* <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link> */}

                    <Button variant="outline-light" className="SteamCoButton" onClick={() => ShowAlert(data)}>
                        <img style={ImgStyle} src={SteamCo} ></img>
                        Connection</Button>
                    {/* <button className="SteamCoButton" onClick={() => ShowAlert(data)}>
                        <img style={ImgStyle} src={SteamCo} ></img>
                        Connection
                    </button> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}