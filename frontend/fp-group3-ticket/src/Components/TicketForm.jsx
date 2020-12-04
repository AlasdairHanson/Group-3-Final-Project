import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
const TicketForm = () => {
  const [firstName, setfirstName] = useState(``);
  const [secondName, setsecondName] = useState(``);
  const [cohort, setcohort] = useState(``);
  const [title, settitle] = useState(``);
  const [issue, setissue] = useState(``);
  const [topic, settopic] = useState(``);
  const [urgency, seturgency] = useState(``);
  const [timestamp, settimestamp] = useState(``);

  const postData = (e) => {
    settimestamp(new Date());
    console.log(
      firstName,
      secondName,
      cohort,
      title,
      issue,
      topic,
      urgency,
      timestamp
    );
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
export default TicketForm;
