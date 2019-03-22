import React, { Component } from 'react';
import { TradeFriendlySearchBar } from './SearchBar'
import { AccueilMessage } from './AccueilMessage'


export function Home() {
    return (
        <div className="App-Content">
            <AccueilMessage />
            <TradeFriendlySearchBar />
        </div>
    );
}