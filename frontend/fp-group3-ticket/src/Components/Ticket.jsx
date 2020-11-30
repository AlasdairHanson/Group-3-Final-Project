import React from 'react';
import { Col, Row, Form, Button, Container, Card, Nav, ListGroupItem, ListGroup, Accordion } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
const Ticket = ({title, topic, desc, time, status, trainee, trainer, priority}) => {
return(

    <Accordion className="ticket" defaultActiveKey="0">
        <Card>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                <Row fluid >
                    <Col xs={6}> <Card.Title>{title}</Card.Title> </Col>
                    <Col xs={4}>
                        <div class="topic blue">{topic}</div>
                        <div class="topic green">{topic}</div>
                    </Col>
                    <Col xs={2} className="icons">
                        <Button variant="link"><Icon.PencilFill/></Button>
                        <Button variant="link"><Icon.TrashFill/></Button>
                    </Col>
                </Row>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
            <Card.Body>
                <Row>
                    <Col xs={8}> {desc}</Col>
                    <Col xs={4}> {time}</Col>
                </Row>
            </Card.Body>
            </Accordion.Collapse>
            <Card.Footer className="text-muted">
                <Row>
                    <Col xs={4}> {trainee} </Col>
                    <Col xs={4}> {trainer} </Col>
                    <Col xs={4}> {priority}</Col>
                </Row>
            </Card.Footer>
        </Card>
    </Accordion>
);
}
export default Ticket;