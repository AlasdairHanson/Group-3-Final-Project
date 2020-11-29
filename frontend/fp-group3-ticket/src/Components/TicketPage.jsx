import React from 'react';
import { Grid, Row, Col, Container } from "react-bootstrap";
import UpperNavBar from './UpperNavBar';
import Ticket from './Ticket';
import CategoryContainer from './CategoryContainer';

const TicketPage = () => {
return(
    <Container fluid="true" className="noPadding">
        <Row>
            <Col className="navBar">
                <UpperNavBar/>
            </Col>
        </Row>
        <Row>
            <Col xs={3} className="sideBar">
                <CategoryContainer/>
                <CategoryContainer/>
            </Col>
            <Col xs={9} className="ticketList">
                <Ticket/>
                <Ticket/>
                <Ticket/>
            </Col>
        </Row>
    </Container>  

);
}
export default TicketPage;