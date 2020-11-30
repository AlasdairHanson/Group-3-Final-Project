package com.qa.helpqueue.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.helpqueue.repo.HelpQueue_Repo;
import com.qa.helpqueue.ticket.Ticket;

@Service
public class HelpQueue_Service {
	
	@Autowired
	private HelpQueue_Repo repo;
	
	public HelpQueue_Service(HelpQueue_Repo repo) {
		super();
		this.repo = repo;
	}
	
	public Ticket createTicket(Ticket ticket) {
		return this.repo.save(ticket);
	}
	
	public List<Ticket> getTicket() {
		return this.repo.findAll();
	}
	
	public Ticket updateTicket(Ticket ticket, Long id) {
		Optional<Ticket> optTicket = this.repo.findById(id);
		Ticket oldTicket = this.repo.findById(id).orElseThrow();
		
		oldTicket.setTicketTitle(ticket.getTicketTitle());
		oldTicket.setTicketAuthor(ticket.getTicketAuthor());
		oldTicket.setTicketDesc(ticket.getTicketDesc());
		oldTicket.setTicketTime(ticket.getTicketTime());
		oldTicket.setTicketUrgency(ticket.getTicketUrgency());
		oldTicket.setTicketTopic(ticket.getTicketTopic());
		oldTicket.setTicketStatus(ticket.getTicketStatus());
		oldTicket.setTicketTrainer(ticket.getTicketTrainer());
		oldTicket.setTicketCohort(ticket.getTicketCohort());
		
		Ticket saved = this.repo.save(oldTicket);
		return saved;
	}
	
	public boolean deleteTicket(Long id) {
		this.repo.deleteById(id);
		return !this.repo.existsById(id);
	}

}
