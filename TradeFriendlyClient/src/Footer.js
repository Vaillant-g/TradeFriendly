import React, { Component } from 'react';
import copyright from './Copyright.png';

export function TradeFriendlyFooter() {
        return(
            <footer className="App-footer">
                <img src={copyright} className="App-copyright" />
                <div >
                2019 "TradeFriendly"
                </div>
            </footer>
        )
}