import axios from "axios";
import React from "react";
import { Col, Row, Button, Card, Accordion } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import EditTicketButton from "./EditTicketButton";
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
    axios.delete("http://localhost:8081/deleteTicket/" + id).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <Card className="ticket">
      <Card.Header>
        <Row>
          <Accordion.Toggle as={Col} eventKey={acc_id}>
            <Card.Title>{title}</Card.Title>
          </Accordion.Toggle>
          <Col xs={2}>
            <div className="topic blue">{topic}</div>
          </Col>
          <Col xs={3}>
            <Card.Text>{cohort}</Card.Text>
          </Col>
          <Col xs={3} className="icons">
            <EditTicketButton
              id={id}
              oldTitle={title}
              oldAuthor={trainee}
              oldUrgency={priority}
              oldCohort={cohort}
              oldDesc={desc}
              oldTopic={topic}
            />
            <Button variant="link" onClick={(e) => deleteTicket(e)}>
              <Icon.TrashFill />
            </Button>
            <div className={"topic " + status}>{status}</div>
          </Col>
        </Row>
      </Card.Header>
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
