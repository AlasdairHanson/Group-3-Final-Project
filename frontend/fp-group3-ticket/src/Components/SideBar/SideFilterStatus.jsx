import React from "react";
import { Accordion, Card} from "react-bootstrap";
import SideSubHeader from "./SideSubHeader";
const SortSideBar = ({ dataSortSetup }) => {
  const sortList = [
    {
      text: "Unresolved",
      request: "/status/Unresolved",
    },
    {
      text: "Ongoing",
      request: "/status/Ongoing",
    },
    {
      text: "Resolved",
      request: "/status/Resolved",
    },
  ];

  return (
    <Accordion>
      <Card className="sideBarContainer">
        <Accordion.Toggle
          as={Card.Header}
          eventKey="0"
          className="p-0 sideBarContainer"
        >
          <SideSubHeader title="Status" />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="p-0">
            {sortList.map((field) => (
              <>
                <div
                  className="sidebarInnerContainer sideBody"
                  onClick={() => dataSortSetup(field.request)}
                >
                  <p className="sidebarChildText">{field.text}</p>
                </div>
              </>
            ))}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};
export default SortSideBar;
