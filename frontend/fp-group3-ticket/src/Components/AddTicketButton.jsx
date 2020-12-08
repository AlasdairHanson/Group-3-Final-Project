import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { PlusCircleFill } from "react-bootstrap-icons";
import AddTicketForm from "./AddTicketForm";
const AddTicketButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        className="ml-3 qaColButton"
        onClick={handleShow}
      >
        <PlusCircleFill /> New Ticket
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="ticketModal"
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Ticket Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddTicketForm />
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
