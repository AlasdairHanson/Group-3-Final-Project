import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import TicketList from "./TicketList";
import Sidebar from "./Sidebar";

const TicketPage = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [ticketData, setTicketData] = useState([]);
  const [isUpdate, setIsUpdate] = useState(true);

  const placeHolderList = [
    {
      id: 1,
      ticketTitle: "Occaecat sunt laborum est",
      ticketTopic: "Networking",
      ticketDesc:
        "Laboris deserunt aute esse id. Mollit aliqua velit minim laborum dolore aliqua quis eiusmod qui. Duis eiusmod culpa amet sunt dolor do sit velit aliquip.",
      ticketTime: "21/05/2020 10:59:04",
      ticketStatus: "Unresolved",
      ticketAuthor: "Florence Riley",
      ticketTrainer: "Maud Erickson",
      ticketUrgency: "Low",
      ticketCohort: "CloudNative",
    },
    {
      id: 2,
      ticketTitle: "Nisi quis amet dolor commodo consequat",
      ticketTopic: "current",
      ticketDesc:
        "Sint anim sunt fugiat aliquip officia quis veniam nisi nulla consectetur eiusmod elit. Laboris nulla et esse velit nisi aute nostrud culpa adipisicing qui culpa occaecat excepteur. Culpa amet duis pariatur laborum magna velit pariatur exercitation sint. Nostrud fugiat velit magna dolor voluptate culpa exercitation. Velit elit non culpa non velit nostrud nulla veniam. Nostrud commodo adipisicing ad do laborum quis amet excepteur sit exercitation. Aliquip fugiat commodo eu id pariatur dolore nulla aliqua officia.",
      ticketTime: "01/11/2019 05:12:55",
      ticketStatus: "Pending",
      ticketAuthor: "Lucas Tucker",
      ticketTrainer: "Chris Becker",
      ticketUrgency: "Medium",
      ticketCohort: "CloudNative",
    },
    {
      id: 3,
      ticketTitle: "Duis commodo sint sunt deserunt.",
      ticketTopic: "clear",
      ticketDesc:
        "Consectetur eiusmod sint velit esse aute quis in dolor dolore. Non nulla culpa eu culpa eu Lorem exercitation adipisicing nisi nisi nulla Lorem. Est velit velit ipsum ut eu pariatur labore amet tempor. Esse irure duis adipisicing dolore veniam tempor enim culpa sint. Elit ut nostrud aliqua ipsum consectetur qui nulla.",
      ticketTime: "16/01/2019",
      ticketStatus: "Resolved",
      ticketAuthor: "Bernard Collier",
      ticketTrainer: "William Flowers",
      ticketUrgency: "High",
      ticketCohort: "Software",
    },
    {
      id: 4,
      ticketTitle: "Elit labore occaecat enim dolor ut enim.",
      ticketTopic: "shells",
      ticketDesc:
        "Excepteur deserunt adipisicing cillum tempor pariatur cupidatat tempor et. Irure dolor aute cupidatat incididunt consectetur. Do aliqua enim reprehenderit officia do minim. Officia ad veniam adipisicing pariatur ea irure fugiat consequat.",
      ticketTime: "16/11/2020 03:51:23",
      ticketStatus: "Pending",
      ticketAuthor: "Jason Lindsey",
      ticketTrainer: "Gussie Saunders",
      ticketUrgency: "Medium",
      ticketCohort: "Devops",
    },
  ];

  useEffect(() => {
    setIsUpdate(false);
    axios.get("http://localhost:8081/getTicket").then(
      (data) => {
        setLoaded(true);
        setTicketData(data.data);
      },
      (error) => {
        setLoaded(true);
        setError(error);
        setTicketData(placeHolderList);
      }
    );
  },[isUpdate]);

  return (
    <Container fluid={true}>
      <Row className="noMargin">
        <Col xs={2} className="mt-3 pt-3 pl-0" sticky="top">
          <Sidebar/>
        </Col>
        <Col xs={10} className="pt-3 mt-3 pr-0">
          <TicketList
            data={ticketData}
            error={error}
            isLoaded={isLoaded}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default TicketPage;
