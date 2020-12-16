import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import TicketList from "./TicketList";
import Sidebar from "../SideBar/Sidebar";

const TicketPage = () => {
  const [error, setError] = useState(`false`);
  const [isLoaded, setLoaded] = useState(false);
  const [ticketData, setTicketData] = useState([]);
  const [isUpdate, setIsUpdate] = useState(true);
  const [dataSort, setDataSort] = useState(`getTicket`);

  const placeHolderList = [
    {
      id: 1,
      title: "lorem vitae mattis nibh ligula nec sem duis",
      author: "Drusilla Crowder",
      timestamp: "2020-06-29 18:48:00",
      content:
        "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      priority: "Critical",
      topic: "orchestration",
      status: "Unresolved",
      trainer: "Shelley Littrick",
      cohort: "Testing",
    },
    {
      id: 2,
      title:
        "semper rutrum nulla nunc purus phasellus in felis donec semper sapien a",
      author: "Jethro Sharpin",
      timestamp: "2020-06-22 17:55:43",
      content:
        "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      priority: "Critical",
      topic: "stable",
      status: "Ongoing",
      trainer: "Reagan Fowlestone",
      cohort: "Testing",
    },
    {
      id: 3,
      title: "posuere cubilia curae mauris",
      author: "Helaina Michele",
      timestamp: "2020-03-06 02:36:43",
      content:
        "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      priority: "High",
      topic: "incremental",
      status: "Resolved",
      trainer: "Brigitta Simanek",
      cohort: "BigData",
    },
    {
      id: 4,
      title: "nulla ac enim in tempor turpis nec euismod scelerisque",
      author: "Morganne Burcombe",
      timestamp: "2020-05-30 13:22:54",
      content:
        "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      priority: "Low",
      topic: "exuding",
      status: "Unresolved",
      trainer: "Abeu Donald",
      cohort: "CloudNative",
    },
    {
      id: 5,
      title:
        "sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce",
      author: "Annis Reed",
      timestamp: "2020-07-13 04:53:37",
      content:
        "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      priority: "Critical",
      topic: "zero defect",
      status: "Resolved",
      trainer: "Nickolaus Carryer",
      cohort: "Software",
    },
    {
      id: 6,
      title:
        "eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum",
      author: "Marika Bremley",
      timestamp: "2020-05-15 17:16:52",
      content:
        "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      priority: "Medium",
      topic: "Distributed",
      status: "Unresolved",
      trainer: "Tootsie Dicte",
      cohort: "Testing",
    },
    {
      id: 7,
      title: "mauris vulputate elementum nullam varius nulla facilisi cras",
      author: "Haley Cullin",
      timestamp: "2020-02-06 10:27:25",
      content:
        "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      priority: "Low",
      topic: "Cross-platform",
      status: "Resolved",
      trainer: "Miles Jurca",
      cohort: "Other",
    },
    {
      id: 8,
      title:
        "donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis",
      author: "Agnese Ousbie",
      timestamp: "2020-07-11 08:09:38",
      content:
        "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      priority: "Medium",
      topic: "radical",
      status: "Unresolved",
      trainer: "Angie Ashton",
      cohort: "DevOps",
    },
    {
      id: 9,
      title:
        "neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus",
      author: "Tony Lobe",
      timestamp: "2020-02-22 06:43:10",
      content:
        "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      priority: "High",
      topic: "grid-enabled",
      status: "Ongoing",
      trainer: "Xaviera Ply",
      cohort: "Software",
    },
    {
      id: 10,
      title:
        "dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
      author: "Hermine Northridge",
      timestamp: "2020-02-24 04:46:24",
      content:
        "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      priority: "High",
      topic: "projection",
      status: "Resolved",
      trainer: "Annabelle Dwyer",
      cohort: "CloudNative",
    },
  ];

  const dataSortSetup = field => {
    setDataSort("/getTicket"+ field);
  }


  useEffect(() => {
    setIsUpdate(false);
    axios.get("http://localhost:8081" + dataSort).then(
      (data) => {
        setLoaded(true);
        setError(false);
        setTicketData(data.data);
        console.log(ticketData)
      },
      (error) => {
        setLoaded(true);
        setError(error);
        setTicketData(placeHolderList);
      }
    );
  }, [dataSort]);
  

  return (
    <Container fluid={true}>
      <Row className="noMargin">
        <Col xs={2} className="mt-3 pt-3 pl-0" sticky="top">
          <Sidebar dataSortSetup={dataSortSetup} />
        </Col>
        <Col xs={10} className="pt-3 mt-3 pr-0">
          <TicketList data={ticketData} error={error} isLoaded={isLoaded} />
        </Col>
      </Row>
    </Container>
  );
};
export default TicketPage;
