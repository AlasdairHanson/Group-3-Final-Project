import React from 'react';
import { Grid, Row, Col, Container, Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import UpperNavBar from './UpperNavBar';
import Ticket from './Ticket';
import CategoryContainer from './CategoryContainer';

const TicketPage = () => {
return(
    <>
    <UpperNavBar/>
    <Container fluid="true">
    <Container fluid className="header">
        <h1>Tickets</h1>
    </Container>
        <Row className="noMargin">
            <Col xs={3} className="sideBar">
                <CategoryContainer/>
                <CategoryContainer/>
            </Col>
            <Col xs={9} className="ticketList">
                <Ticket title="title1" topic="topic1" desc="description1" time="time1" status="resolved" trainee="trainee" trainer="trainer" priority="priority"/>
                <Ticket title="title1" topic="topic1" desc="description1" time="time1" status="resolved" trainee="trainee" trainer="trainer" priority="priority"/>
                <Ticket title="title1" topic="topic1" desc="description1" time="time1" status="resolved" trainee="trainee" trainer="trainer" priority="priority"/>
                <Ticket title="title1" topic="topic1" desc="description1" time="time1" status="resolved" trainee="trainee" trainer="trainer" priority="priority"/>
                <Ticket title="title1" topic="topic1" desc="description1" time="time1" status="resolved" trainee="trainee" trainer="trainer" priority="priority"/>
                <Ticket title="title1" topic="topic1" desc="description1" time="time1" status="resolved" trainee="trainee" trainer="trainer" priority="priority"/>
                <Ticket title="title1" topic="topic1" desc="description1" time="time1" status="resolved" trainee="trainee" trainer="trainer" priority="priority"/>
                <Ticket title="title1" topic="topic1" desc="description1" time="time1" status="resolved" trainee="trainee" trainer="trainer" priority="priority"/>
            </Col>
        </Row>
    </Container>
    <div class="page-bg"></div>
    </>
  

);
}
export default TicketPage;