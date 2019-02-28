import React, { Component } from 'react';
import logo from './Logo.png';
import SteamCo from './Steam.png';

function ShowAlert() {
    alert("test");
}

const ImgStyle = {
    width: 127
};

export function TradeFriendlyHeader() {
        return (
            <header className="App-header"> 
                <img src={logo} className="App-logo" />
                <button className="SteamCoButton" onClick={ShowAlert}><img style={ImgStyle} src={SteamCo} ></img></button>
            </header>
        )
}