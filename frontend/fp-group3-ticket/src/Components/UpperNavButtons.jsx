import React from 'react';
import { Col, Row, Form, Button, Container } from "react-bootstrap";
const UpperNavButtons = () => {
return (
  <Container fluid={true} className="noPadding">
    <Row>
      <Col>
        <Button variant="primary">Log Out</Button>
      </Col>
      <Col>
        <Button variant="success">New Ticket</Button>
      </Col>
    </Row>
  </Container>
);
}
export default UpperNavButtons;