import React from "react";
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const TicketBody = ({
  title,
  topic,
  desc,
  time,
  status,
  trainee,
  trainer,
  priority,
}) => {
  return (
    <Container fluid={true}>
      <Row>
        <Col xs={6} className="box">
          <h2>{title}</h2>
        </Col>
        <Col xs={4} className="box">
          <Button variant="outline-primary">{topic}</Button>
          <Button variant="outline-primary">{topic}</Button>
        </Col>
        <Col xs={2} className="box">
          <Icon.PencilFill />
          <Icon.TrashFill />
        </Col>
      </Row>
      <Row>
        <Col xs={8} className="box">
          <p>{desc}</p>
        </Col>
        <Col xs={4} className="box">
          <p>{time}</p>
        </Col>
      </Row>
      <Row>
        <Col xs={4} className="box">
          <p>{trainee}</p>
        </Col>
        <Col xs={4} className="box">
          <p>{trainer}</p>
        </Col>
        <Col xs={4} className="box">
          <p>{priority}</p>
        </Col>
      </Row>
    </Container>
  );
};
export default TicketBody;
