import React, { useEffect, useState } from 'react';
import { Col, Accordion } from "react-bootstrap";
import Ticket from './Ticket';
import axios from 'axios';
const TicketList = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setLoaded] = useState(false);
    const [ticketData, setTicketData] = useState([]);

    useEffect(() => {
            axios.get("http://dummy.restapiexample.com/api/v1/employees")
                .then((data) => {
                    setLoaded(true);
                    console.log(data);
                    setTicketData(data.data.data);
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
                        title={ticket.employee_name}
                        topic={ticket.employee_age}
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        time={ticket.employee_age}
                        status={ticket.employee_name}
                        trainee={ticket.employee_name} 
                        trainer={ticket.employee_name} 
                        priority={ticket.employee_name}/>
                    ))}
                </Accordion>
            </>
        )
    }
}
export default TicketList;