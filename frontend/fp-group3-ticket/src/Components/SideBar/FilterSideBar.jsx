import React from "react";
import { Accordion, Card } from "react-bootstrap";
import SideBarSubAccordionCard from "./SideBarSubAccordion";
import SideHeader from "./SideHeader";
import SideSubHeader from "./SideSubHeader";
const FilterSideBar = () => {
  const filterList = [
    {
      acc_id: "0",
      key: "0",
      title: "Topic",
      content: ["Networking", "Security", "Privacy"],
    },
    {
      acc_id: "1",
      key: "1",
      title: "Status",
      content: ["Unresolved", "Pending", "Resolved"],
    },
    {
      acc_id: "2",
      key: "2",
      title: "Priority",
      content: ["Low", "Med", "High", "Critical"],
    },
    {
      acc_id: "3",
      key: "3",
      title: "Cohort",
      content: ["CloudNative", "Software", "BigData"],
    },
  ];

  console.log(filterList);

  
  return (
    <>
      <div className="sidebarContainer mb-3">
        <Accordion defaultActiveKey="0">
          <Card className="sideBarContainer">
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              className="p-0 sideBarContainer"
            >
              <SideHeader title="Filter" />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="p-0">
                <Accordion>
                  {filterList.map((parent) => (
                    <>
                      <Card className="sideBarContainer">
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey={parent.acc_id}
                          className="p-0 sideBarContainer">
                          <SideSubHeader title={parent.title} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={parent.acc_id}>
                          <Card.Body className="p-0">
                            {parent.content.map((child) => (
                              <div className="sidebarInnerContainer sideBody">
                                <p className="sidebarChildText">{child.content}</p>
                              </div>
                            ))}
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </>
                  ))}
                </Accordion>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </>
  );
};
export default FilterSideBar;
