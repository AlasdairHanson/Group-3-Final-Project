import React from 'react';
import { Col, Form } from 'react-bootstrap';
const TicketForm = () => {
return (
  <Form>
    <Form.Row>
      <Form.Group as={Col}>
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Full Name" />
      </Form.Group>

      <Form.Group as={Col}>
        <Form.Label>Cohort</Form.Label>
        <Form.Control type="text" placeholder="Cohort" />
      </Form.Group>
    </Form.Row>

    <Form.Row>
      <Form.Group as={Col}>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" />
      </Form.Group>

      <Form.Group as={Col}>
        <Form.Label>Topic</Form.Label>
        <Form.Control as="select">
          <option>Networking</option>
          <option>Privacy</option>
          <option>Software</option>
          <option>Hardware</option>
          <option>Keys</option>
        </Form.Control>
      </Form.Group>

      <Form.Group as={Col}>
        <Form.Label>Urgency</Form.Label>
        <Form.Control as="select">
          <option>Low</option>
          <option>Low - Med</option>
          <option>Medium</option>
          <option>Medium - High</option>
          <option>High</option>
        </Form.Control>
      </Form.Group>
    </Form.Row>

    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>Description</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
  </Form>
);
}
export default TicketForm;