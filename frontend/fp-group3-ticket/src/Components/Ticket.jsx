import React from 'react';
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import TicketBody from './TicketBody';
const Ticket = () => {
return(
    <Col className="ticket">
        <Container fluid>
            <Row>
                <Col xs={1} className='status'> </Col>
                <Col className='ticketBody'>
                    <TicketBody 
                    title="title1"
                    topic="topic1"
                    desc="description1"
                    time="time1"
                    status="resolved"
                    trainee="trainee"
                    trainer="trainer"
                    priority="priority"
                    />
                </Col>
            </Row>
        </Container>
    </Col>  
);
}
export default Ticket;