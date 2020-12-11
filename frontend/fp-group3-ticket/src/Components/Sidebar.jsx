import React from "react";
import { Accordion, Button, Card, Container } from "react-bootstrap";
import SideBody from "./SideBody";
import SideHeader from "./SideHeader";
const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <SideHeader />
      <SideBody />
      <SideBody />
      <SideBody />
      <SideBody />
      <SideBody />
      <SideBody />
    </div>
  );
};
export default Sidebar;
