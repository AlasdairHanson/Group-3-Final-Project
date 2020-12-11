import React from 'react';
const SideHeader = ({title}) => {
return (
  <div className="sidebarInnerContainer">
    <h5 className="sidebarText">{title}</h5>
  </div>
);
}
export default SideHeader;