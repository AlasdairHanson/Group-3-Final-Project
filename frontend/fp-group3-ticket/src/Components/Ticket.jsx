import axios from "axios";
import React from "react";
import { Col, Row, Button, Card, Accordion } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
const Ticket = ({
  id,
  acc_id,
  title,
  topic,
  desc,
  time,
  status,
  trainee,
  trainer,
  priority,
  cohort,
}) => {

  const deleteTicket = (e) => {
    console.log("delete data");
    axios.delete("http://localhost:8081/deleteTicket/" + id);
  };

  return (
    <Card className="ticket">
      <Accordion.Toggle as={Card.Header} variant="link" eventKey={acc_id}>
        <Row>
          <Col xs={4}>
            <Card.Title>{title}</Card.Title>
          </Col>
          <Col xs={3}>
            <div className="topic blue">{topic}</div>
          </Col>
          <Col xs={3}>{cohort}</Col>
          <Col xs={2} className="icons">
            <Button variant="link">
              <Icon.PencilFill />
            </Button>
            <Button variant="link" onClick={(e) => deleteTicket(e)}>
              <Icon.TrashFill />
            </Button>
          </Col>
        </Row>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={acc_id}>
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
  );
};
export default Ticket;
