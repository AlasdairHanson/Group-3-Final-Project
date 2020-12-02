import React, { useState } from "react";
import { Button, Form, FormControl, Modal, Nav, Navbar } from "react-bootstrap";
import { PersonFill, PlusCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import TicketForm from "./TicketForm";
const AddTicketButton = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" className="ml-3" onClick={handleShow}>
        <PlusCircleFill /> New Ticket
      </Button>

      <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
        <Modal.Header closeButton>
          <Modal.Title>Add Ticket Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TicketForm />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AddTicketButton;
