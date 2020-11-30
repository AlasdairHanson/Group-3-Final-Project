package com.qa.helpqueue.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qa.helpqueue.ticket.Ticket;


@Repository
public interface HelpQueue_Repo extends JpaRepository<Ticket, Long> {

}
