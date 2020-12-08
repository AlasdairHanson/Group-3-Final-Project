import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { PencilFill, PlusCircleFill } from "react-bootstrap-icons";
import EditTicketForm from "./EditTicketForm";
const EditTicketButton = ({id}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="link" onClick={handleShow}>
        <PencilFill />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="ticketModal"
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Ticket Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditTicketForm id={id}/>
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
export default EditTicketButton;
