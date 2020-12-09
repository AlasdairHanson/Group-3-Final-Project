import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
const EditTicketForm = ({
  id,
  oldTitle,
  oldAuthor,
  oldUrgency,
  oldCohort,
  oldDesc,
  oldTopic,
}) => {
  const [cohort, setcohort] = useState(oldCohort);
  const [trainer, settrainer] = useState(`None`);
  const [title, settitle] = useState(oldTitle);
  const [status, setStatus] = useState(`unresolved`);
  const [issue, setissue] = useState(oldDesc);
  const [topic, settopic] = useState(oldTopic);
  const [urgency, seturgency] = useState(oldUrgency);
  const [timestamp, settimestamp] = useState(
    new Date().toLocaleString("en-GB")
  );

  const ticketData = {
    ticketTitle: title,
    ticketTopic: topic,
    ticketDesc: issue,
    ticketStatus: status,
    ticketTrainer: trainer,
    ticketUrgency: urgency,
    ticketCohort: cohort,
    ticketTime: timestamp,
    ticketAuthor: oldAuthor,
  };

  const updateData = (e) => {
    console.log("update data");
    axios
      .put("http://localhost:8081/updateTicket/" + id, ticketData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Trainer for Ticket</Form.Label>
          <Form.Control
            type="text"
            placeholder="Trainer Name"
            onChange={(e) => {
              settrainer(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Status</Form.Label>
          <Form.Control
            as="select"
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            <option>Unresolved</option>
            <option>Pending</option>
            <option>Resolved</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Cohort</Form.Label>
          <Form.Control
            as="select"
            defaultValue={oldCohort}
            onChange={(e) => {
              setcohort(e.target.value);
            }}
          >
            <option>CloudNative</option>
            <option>Software Specialist</option>
            <option>DevOps</option>
            <option>BigData</option>
            <option>Barclays</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Title summary of the issue</Form.Label>
          <Form.Control
            type="text"
            placeholder="Issue Summary"
            defaultValue={oldTitle}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            defaultValue={oldDesc}
            onChange={(e) => {
              setissue(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Topic</Form.Label>
          <Form.Control
            as="select"
            defaultValue={oldTopic}
            onChange={(e) => {
              settopic(e.target.value);
            }}
          >
            <option>Networking</option>
            <option>Privacy</option>
            <option>Software</option>
            <option>Hardware</option>
            <option>Keys</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Urgency</Form.Label>
          <Form.Control
            as="select"
            defaultValue={oldUrgency}
            onChange={(e) => {
              seturgency(e.target.value);
            }}
          >
            <option>Low</option>
            <option>Low - Med</option>
            <option>Medium</option>
            <option>Medium - High</option>
            <option>High</option>
          </Form.Control>
        </Form.Group>
      </Form>

      <Button
        onClick={(e) => updateData(e)}
        variant="primary"
        size="lg"
        block
        className="mb-4"
      >
        Click me!
      </Button>
    </>
  );
};
export default EditTicketForm;
