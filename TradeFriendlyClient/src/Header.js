import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import logo from './Logo.png';
import SteamCo from './Steam.png';
import App from './App';

function ShowAlert(data) {
    //alert("test");
    console.log(data.test);
    //const socket = socketIOClient("http://127.0.0.1:4001");
    data.test.emit('steamCo', "Victime");
}

const ImgStyle = {
    width: 127
};

export function TradeFriendlyHeader(data) {
        return (
            <header className="App-header"> 
                <img src={logo} className="App-logo" />
                <button className="SteamCoButton" onClick={() => ShowAlert(data)}><img style={ImgStyle} src={SteamCo} ></img></button>
            </header>
        )
}