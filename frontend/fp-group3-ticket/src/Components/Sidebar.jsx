import React from "react";
import { Accordion, Button, Card } from "react-bootstrap";
const Sidebar = () => {
  return (
    <Card>
      <div className="sidebarCont">
        <p className="sidebarHead">Head</p>
      </div>
      <div className="sidebarCont">
        <p className="sidebarBody">Body 1</p>
      </div>
    </Card>
  );
};
export default Sidebar;
