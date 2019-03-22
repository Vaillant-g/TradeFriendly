import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export function TradeFriendlySearchBar() {
    return (

        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form >
                        <Form.Group controlId="exampleForm.ControlInput1">
                            {/* <Form.Label>Email address</Form.Label> */}
                            <Form.Control type="email" placeholder="ex: Karambit | Fade (Factory New)" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
              </Button>
                    </Form>
                </Col>
            </Row>
        </Container>

    );
}