import React from "react";
import { Accordion, Button, Card, Container } from "react-bootstrap";
import SideBody from "./SideBody";
import SideHeader from "./SideHeader";
const SideBarAccordionCard = ({ acc_id }) => {
  return (
    <Card className="sideBarContainer">
      <Accordion.Toggle
        as={Card.Header}
        eventKey={acc_id}
        className="p-0 sideBarContainer"
      >
        <SideHeader />
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={acc_id}>
        <Card.Body className="p-0">
          <SideBody />
          <SideBody />
          <SideBody />
          <SideBody />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
export default SideBarAccordionCard;
