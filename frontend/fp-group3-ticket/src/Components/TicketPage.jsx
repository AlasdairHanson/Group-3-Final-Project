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
      ticketTitle: "Placeholder Title",
      ticketTopic: "Topic",
      ticketDesc: "Placeholder Description",
      ticketTime: "Placeholder Time",
      ticketStatus: "Unresolved",
      ticketAuthor: "Placeholder Author",
      ticketTrainer: "Placeholder Trainer",
      ticketUrgency: "Low",
      ticketCohort: "CloudNative",
    },
    {
      id: 2,
      ticketTitle: "Placeholder Title",
      ticketTopic: "Topic",
      ticketDesc: "Placeholder Description",
      ticketTime: "Placeholder Time",
      ticketStatus: "Pending",
      ticketAuthor: "Placeholder Author",
      ticketTrainer: "Placeholder Trainer",
      ticketUrgency: "Medium",
      ticketCohort: "CloudNative",
    },
    {
      id: 3,
      ticketTitle: "Placeholder Title",
      ticketTopic: "Topic",
      ticketDesc: "Placeholder Description",
      ticketTime: "Placeholder Time",
      ticketStatus: "Resolved",
      ticketAuthor: "Placeholder Author",
      ticketTrainer: "Placeholder Trainer",
      ticketUrgency: "High",
      ticketCohort: "CloudNative",
    },
    {
      id: 4,
      ticketTitle: "Placeholder Title",
      ticketTopic: "Topic",
      ticketDesc: "Placeholder Description",
      ticketTime: "Placeholder Time",
      ticketStatus: "Unresolved",
      ticketAuthor: "Placeholder Author",
      ticketTrainer: "Placeholder Trainer",
      ticketUrgency: "Critical",
      ticketCohort: "CloudNative",
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
