import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function SendSerchedItem(data, ToFind) {
    console.log(data.test);
    console.log(ToFind);
    data.test.emit('WeaponSearched', "Arme envoyé");
    data.test.on('FriendsWithWeapon', function(data) {
        console.log(data);
    });
}


export function TradeFriendlySearchBar(data) {
    var ToFind;
    return (

        <Container>
        <form>
            <Row noGutters>
                {/* <Form> */}
                <Col md={{ span: 9 }}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="" placeholder="ex: Karambit | Fade (Factory New)" value={ToFind}/>
                    </Form.Group>
                </Col>
                <Col md={{ span: 3 }}>
                    <Button variant="primary" type="submit" onClick={() => SendSerchedItem(data, ToFind)}>
                        Submit
                            </Button>
                </Col>
                {/* </Form> */}
            </Row>
                </form>
        </Container>

    );
}