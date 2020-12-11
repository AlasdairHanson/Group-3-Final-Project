import React from "react";
import { Accordion, Button, Card, Container } from "react-bootstrap";
import SideBarAccordionCard from "./SideBarAccordionCard";
const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <Accordion defaultActiveKey="0">
        <SideBarAccordionCard acc_id="0" />
        <SideBarAccordionCard acc_id="1" />
        <SideBarAccordionCard acc_id="2" />
        <SideBarAccordionCard acc_id="3" />
      </Accordion>
    </div>
  );
};
export default Sidebar;
