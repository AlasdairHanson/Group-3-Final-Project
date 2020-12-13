import React from "react";
import { Accordion } from "react-bootstrap";
import FilterSideBar from "./FilterSideBar";
import SideBarAccordionCard from "./SideBarAccordionCard";
import SortSideBar from "./SortSideBar";
const Sidebar = () => {

  return (
    <div className="parentSideContainer">
      <SortSideBar />
      <FilterSideBar />
    </div>
  );
};
export default Sidebar;
