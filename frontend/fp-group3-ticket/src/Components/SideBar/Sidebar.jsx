import React from "react";
import FilterSideBar from "./FilterSideBar";
import SortSideBar from "./SortSideBar";
const Sidebar = ({dataSortSetup}) => {

  return (
    <div className="parentSideContainer">
      <SortSideBar dataSortSetup={dataSortSetup} />
      <FilterSideBar dataSortSetup={dataSortSetup} />
    </div>
  );
};
export default Sidebar;
