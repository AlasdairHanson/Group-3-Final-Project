import React from "react";
import FilterSideBar from "./FilterSideBar";
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
