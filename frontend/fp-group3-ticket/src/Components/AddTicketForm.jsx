import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
const AddTicketForm = () => {
  const [firstName, setfirstName] = useState(``);
  const [secondName, setsecondName] = useState(``);
  const [cohort, setcohort] = useState(``);
  const [title, settitle] = useState(``);
  const [issue, setissue] = useState(``);
  const [topic, settopic] = useState(``);
  const [urgency, seturgency] = useState(``);
  const [timestamp, settimestamp] = useState(
    new Date().toLocaleString("en-GB")
  );

  const ticketData = {
    ticketTitle: title,
    ticketTopic: topic,
    ticketDesc: issue,
    ticketTime: timestamp,
    ticketStatus: "Unresolved",
    ticketAuthor: firstName + " " + secondName,
    ticketTrainer: "none",
    ticketUrgency: urgency,
    ticketCohort: cohort,
  };

  const postData = (e) => {
    const newDate = new Date().toLocaleString("en-GB");
    settimestamp(newDate);
    axios
      .post("http://localhost:8081/createTicket", ticketData)
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
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            onChange={(e) => {
              setfirstName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Second Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Second Name"
            onChange={(e) => {
              setsecondName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Cohort</Form.Label>
          <Form.Control
            as="select"
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
            placeholder="Issue Sumamary"
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
            onChange={(e) => {
              setissue(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Topic</Form.Label>
          <Form.Control
            as="select"
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
        onClick={(e) => postData(e)}
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
export default AddTicketForm;
