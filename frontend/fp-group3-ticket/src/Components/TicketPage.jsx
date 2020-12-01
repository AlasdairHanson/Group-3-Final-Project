import React, { useState } from 'react';
import { Grid, Row, Col, Container, Nav, Navbar, Form, FormControl, Button, Accordion } from "react-bootstrap";
import UpperNavBar from './UpperNavBar';
import Ticket from './Ticket';
import CategoryContainer from './CategoryContainer';
import PageBG from './PageBG';
import TicketList from './TicketList';

const TicketPage = () => {

return(

    <Container fluid="true">
        <Row className="noMargin">
            <Col xs={2} className="sideBar">
                <CategoryContainer/>
                <CategoryContainer/>
            </Col>
            <TicketList/>
        </Row>
    </Container>
  

);
}
export default TicketPage;