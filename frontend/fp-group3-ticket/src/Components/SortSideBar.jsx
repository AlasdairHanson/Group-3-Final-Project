import React from "react";
import { Accordion, Card, Container, Col } from "react-bootstrap";
import SideBarAccordionCard from "./SideBarAccordionCard";
import SideBody from "./SideBody";
import SideHeader from "./SideHeader";
const SortSideBar = () => {

const sortList = ["Title", "Topic", "Cohort", "Trainee", "Trainer"];

  return (
    <div className="sidebarContainer mb-3">
      <Accordion>
        <Card className="sideBarContainer">
          <Accordion.Toggle
            as={Card.Header}
            eventKey="0"
            className="p-0 sideBarContainer"
          >
            <SideHeader title="Sort" />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="p-0">
              {sortList.map((obj) => (
                <SideBody content={obj} />
              ))}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};
export default SortSideBar;
