import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
const UpperNavBar = () => {
return(
    <Navbar bg="light" expand="lg" sticky="top" className="navBar">
        <Navbar.Brand>
            <img 
            src="https://i.imgur.com/Wa6jdim.png"
            alt="QA Logo"
            height="32px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>  

);
}
export default UpperNavBar;