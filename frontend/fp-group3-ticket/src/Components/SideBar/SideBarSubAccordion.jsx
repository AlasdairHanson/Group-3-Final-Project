import React from "react";
import { Accordion, Card } from "react-bootstrap";
import SideBody from "./SideBody";
import SideSubHeader from "./SideSubHeader";
const SideBarSubAccordionCard = ({ acc_id, title, contentList }) => {
  return (
    <Card className="sideBarContainer">
      <Accordion.Toggle
        as={Card.Header}
        eventKey={acc_id}
        className="p-0 sideBarContainer"
      >
        <SideSubHeader title={title} />
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={acc_id}>
        <Card.Body className="p-0">
          {contentList.map(() => (
            <div className="sidebarInnerContainer sideBody">
              <p className="sidebarChildText">{}</p>
            </div>
          ))}
        </Card.Body>
      </Accordion.Collapse>

    </Card>
  );
};
export default SideBarSubAccordionCard;
