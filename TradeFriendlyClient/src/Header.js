import React, { Component } from 'react';
import logo from './Logo.png'

function ShowAlert() {
    alert("test");
}

export function TradeFriendlyHeader() {
        return (
            <header className="App-header"> 
                <img src={logo} className="App-logo" />
                <button className="SteamCoButton" onClick={ShowAlert}>Connexion</button>
            </header>
        )
}