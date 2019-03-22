import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export function TradeFriendlySearchBar() {
    return (

        <Container>
            <Row noGutters>
                {/* <Form> */}
                <Col md={{ span: 9 }}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="" placeholder="ex: Karambit | Fade (Factory New)" />
                    </Form.Group>
                </Col>
                <Col md={{ span: 3 }}>
                    <Button variant="primary" type="submit">
                        Submit
                            </Button>
                </Col>
                {/* </Form> */}

            </Row>
        </Container>

    );
}