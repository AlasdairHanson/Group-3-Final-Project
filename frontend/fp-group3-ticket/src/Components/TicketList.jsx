import React, { useEffect, useState } from "react";
import { Col, Accordion } from "react-bootstrap";
import Ticket from "./Ticket";
import axios from "axios";
const TicketList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [ticketData, setTicketData] = useState([]);

  useEffect(() => {
    axios.get("http://dummy.restapiexample.com/api/v1/employees").then(
      (data) => {
        setLoaded(true);
        console.log(data);
        setTicketData(data.data.data);
      },
      (error) => {
        setLoaded(true);
        setError(error);
      }
    );
  }, []);

    useEffect(() => {
            axios.get("http://localhost:8081/getTicket")
                .then((data) => {
                    setLoaded(true);
                    console.log(data);
                    console.log(data.data);
                    setTicketData(data.data);
                }, (error) => {
                    setLoaded(true);
                    setError(error);
                })
    }, [])

    if (error) {
        return <p>Oops.. something has happened... {error.message}</p>
    } else if (!isLoaded) {
        return <p> Please wait.... we are loading your information</p>
    } else {
        return (
            <>
                <Accordion defaultActiveKey="0">
                    {ticketData.map((ticket) => (
                        <Ticket key={ticket.id} obj={ticket}
                        acc_id={ticket.id}
                        title={ticket.ticketTitle}
                        topic={ticket.ticketTopic}
                        desc={ticket.ticketDesc}
                        time={ticket.ticketTime}
                        status={ticket.ticketStatus}
                        trainee={ticket.ticketAuthor} 
                        trainer={ticket.ticketTrainer} 
                        priority={ticket.ticketPriority}
                        cohort={ticket.ticketCohort}/>
                    ))}
                </Accordion>
            </>
        )
    }
}
export default TicketList;
