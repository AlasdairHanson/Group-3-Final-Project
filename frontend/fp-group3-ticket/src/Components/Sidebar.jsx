import React from "react";
import { Accordion } from "react-bootstrap";
import SideBarAccordionCard from "./SideBarAccordionCard";
const Sidebar = () => {

const titleList =["Ascending", "Descending"];
const topicList =["Ascending", "Descending", "Networking", "Security", "Privacy"];
const statusList =["Ascending", "Descending", "Unresolved", "Pending", "Resolved"];
const traineeList =["Ascending", "Descending"];
const trainerList =["Ascending", "Descending", "Jordan", "Luke", "Sav"];
const priorityList =["Ascending", "Descending","Low", "Med", "High"];
const cohortList =["Ascending", "Descending", "CloudNative", "Software", "BigData"];

  return (
    <div className="sidebarContainer">
      <Accordion defaultActiveKey="0">
        <SideBarAccordionCard
          acc_id="0"
          key="0"
          title="Title"
          contentList={titleList}
        />
        <SideBarAccordionCard
          acc_id="1"
          key="1"
          title="Topic"
          contentList={topicList}
        />
        <SideBarAccordionCard
          acc_id="2"
          key="2"
          title="Status"
          contentList={statusList}
        />
        <SideBarAccordionCard
          acc_id="3"
          key="3"
          title="Trainee"
          contentList={traineeList}
        />
        <SideBarAccordionCard
          acc_id="4"
          key="4"
          title="Trainer"
          contentList={trainerList}
        />
        <SideBarAccordionCard
          acc_id="5"
          key="5"
          title="Priority"
          contentList={priorityList}
        />
        <SideBarAccordionCard
          acc_id="6"
          key="6"
          title="Cohort"
          contentList={cohortList}
        />
      </Accordion>
    </div>
  );
};
export default Sidebar;
