import React from 'react';
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
const TicketBody = () => {
return( 
    <Container fluid>
        <Row fluid >
            <Col xs={6} className="box">
                <h2>Title</h2>
            </Col>
            <Col xs={4} className="box">
                <Button variant="outline-primary">Topic1</Button>
                <Button variant="outline-primary">Topic2</Button>
            </Col>
            <Col xs={2} className="box">
                <Icon.PencilFill/>
                <Icon.TrashFill/>
            </Col>
        </Row>
        <Row>
            <Col xs={8} className="box">
                <p>Description</p>
            </Col>
            <Col xs={4} className="box">
                <p>When?</p>
            </Col>
        </Row>
        <Row>
            <Col xs={4} className="box">
                <p>Who</p>
            </Col>
            <Col xs={4} className="box">
                <p>Whose</p>
            </Col>
            <Col xs={4} className="box">
                <p>Priority</p>
            </Col>
        </Row>
    </Container>
);
}
export default TicketBody;