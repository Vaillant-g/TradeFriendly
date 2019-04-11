import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function SendSerchedItem(data, ToFind) {
    console.log(data.test);
    console.log("to find : " + ToFind.current.value);
    console.log("testFN");
    data.test.emit('WeaponSearched', ToFind.current.value);
}


export function TradeFriendlySearchBar(data) {
    var ToFind = React.createRef();
    data.test.on('FriendsWithWeapon', function(data) {
        console.log("OAKAKAKAK");
    });
    return (

        <Container>
        <form>
            <Row noGutters>
                <Col md={{ span: 9 }}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="" placeholder="ex: Karambit | Fade (Factory New)" ref={ToFind}/>
                    </Form.Group>
                </Col>
                <Col md={{ span: 3 }}>
                    <Button variant="primary" type="submit" onClick={() => SendSerchedItem(data, ToFind)}>
                        Submit
                    </Button>
                </Col>
            </Row>
                </form>
        </Container>

    );
}