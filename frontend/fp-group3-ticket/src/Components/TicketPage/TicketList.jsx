import React from "react";
import { Accordion} from "react-bootstrap";
import Ticket from "./Ticket";
const TicketList = ({data, error, isLoaded}) => {

  if (error) {
    return (
      <p>oops.. something happened..</p>
    );
  } else if (!isLoaded) {
    return <p> Please wait.... we are loading your information</p>;
  } else {
    return (
      <>
        <Accordion defaultActiveKey="0">
          {data.map((ticket) => (
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
