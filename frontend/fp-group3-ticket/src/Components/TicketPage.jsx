import React from 'react';
import { Grid, Row, Col, Container, Nav, Navbar, Form, FormControl, Button, Accordion } from "react-bootstrap";
import UpperNavBar from './UpperNavBar';
import Ticket from './Ticket';
import CategoryContainer from './CategoryContainer';

const TicketPage = () => {
return(
    <>
    <Container fluid="true">
        <Row className="noMargin">
            <Col xs={2} className="sideBar">
                <CategoryContainer/>
                <CategoryContainer/>
            </Col>
            <Col xs={10} className="ticketList">
                <Accordion defaultActiveKey="0">
                    <Ticket acc_id="0" title="title1" topic="topic1" desc="description1" time="time1" status="resolved" trainee="trainee" trainer="trainer" priority="priority"/>
                    <Ticket acc_id="1" title="title1" topic="topic1" desc="description1" time="time1" status="resolved" trainee="trainee" trainer="trainer" priority="priority"/>
                    <Ticket acc_id="2" title="title1" topic="topic1" desc="description1" time="time1" status="resolved" trainee="trainee" trainer="trainer" priority="priority"/>
                    <Ticket acc_id="3" title="title1" topic="topic1" desc="description1" time="time1" status="resolved" trainee="trainee" trainer="trainer" priority="priority"/>
                    <Ticket acc_id="4" title="title1" topic="topic1" desc="description1" time="time1" status="resolved" trainee="trainee" trainer="trainer" priority="priority"/>
                    <Ticket acc_id="5" title="title1" topic="topic1" desc="description1" time="time1" status="resolved" trainee="trainee" trainer="trainer" priority="priority"/>
                </Accordion>
            </Col>
        </Row>
    </Container>
    <div class="page-bg"></div>
    </>
  

);
}
export default TicketPage;