import React, { useEffect, useState } from "react";
import { Accordion} from "react-bootstrap";
import Ticket from "./Ticket";
import axios from "axios";
const TicketList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [ticketData, setTicketData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/getTicket").then(
      (data) => {
        setLoaded(true);
        setTicketData(data.data);
      },
      (error) => {
        setLoaded(true);
        setError(error);
      }
    );
  });

  if (error) {
    return (
      <Accordion defaultActiveKey="0">
        <Ticket
          key="0"
          obj="0"
          id="0"
          acc_id="0"
          title="placeholder"
          topic="placeholder"
          desc="placeholder"
          time="placeholder"
          status="placeholder"
          trainee="placeholder"
          trainer="placeholder"
          priority="placeholder"
          cohort="placeholder"
        />
      </Accordion>
    );
  } else if (!isLoaded) {
    return <p> Please wait.... we are loading your information</p>;
  } else {
    return (
      <>
        <Accordion defaultActiveKey="0">
          {ticketData.map((ticket) => (
            <Ticket
              key={ticket.id}
              obj={ticket}
              id={ticket.id}
              acc_id={ticket.id}
              title={ticket.ticketTitle}
              topic={ticket.ticketTopic}
              desc={ticket.ticketDesc}
              time={ticket.ticketTime}
              status={ticket.ticketStatus}
              trainee={ticket.ticketAuthor}
              trainer={ticket.ticketTrainer}
              priority={ticket.ticketUrgency}
              cohort={ticket.ticketCohort}
            />
          ))}
        </Accordion>
      </>
    );
  }
};
export default TicketList;
