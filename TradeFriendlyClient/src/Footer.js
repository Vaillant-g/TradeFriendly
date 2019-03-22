import React, { Component } from 'react';
import copyright from './Copyright.png';
import Container from 'react-bootstrap/Container';

export function TradeFriendlyFooter() {
    return (
        <footer className="App-footer">
            <Container>
                <p>
                    © 2019 Copyright:
                    <a href="#">TradeWithYourFriends</a>
                </p>
            </Container>
        </footer>
    );
}   