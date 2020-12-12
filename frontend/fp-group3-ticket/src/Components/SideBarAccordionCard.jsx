import React from "react";
import { Accordion, Card } from "react-bootstrap";
import SideBody from "./SideBody";
import SideHeader from "./SideHeader";
const SideBarAccordionCard = ({ acc_id, title, contentList }) => {
  return (
    <Card className="sideBarContainer">
      <Accordion.Toggle
        as={Card.Header}
        eventKey={acc_id}
        className="p-0 sideBarContainer"
      >
        <SideHeader title={title} />
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={acc_id}>
        <Card.Body className="p-0">
          {contentList.map((obj) => (
            <SideBody content={obj}/>
          ))}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
export default SideBarAccordionCard;
