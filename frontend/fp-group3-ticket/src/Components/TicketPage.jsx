import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import TicketList from "./TicketList";
import Sidebar from "./Sidebar";

const TicketPage = () => {
  return (
    <Container fluid={true}>
      <Row className="noMargin">
        <Col xs={2} className="mt-3 pt-3">
          <Sidebar />
        </Col>
        <Col xs={10} className="pt-3 mt-3">
          <TicketList />
        </Col>
      </Row>
    </Container>
  );
};
export default TicketPage;
