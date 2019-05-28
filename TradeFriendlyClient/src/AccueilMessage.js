import React, { Component } from 'react';
import Ak47image from './AK47.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';


export function AccueilMessage() {
    return (
        <Container>
            <Jumbotron id="MessageAccueil">
                <Row>
                    <Col md={{span: 9}}>
                    <h1 className="AccueilAnnonce">
                        Find the <span className="ImportantWord">skins</span> you want, 
                        and <span className="ImportantWord">trade</span> them with your 
                        <span className="ImportantWord"> friends</span> !
                    </h1>
                    </Col>
                    <Col md={{span:3}}>
                        <Image className="AccueilImage" src={Ak47image}/>
                    </Col>
                </Row>
            </Jumbotron>
        </Container>

    );
}