package com.qa.wishlist.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;

import com.qa.helpqueue.repo.HelpQueue_Repo;
import com.qa.helpqueue.service.HelpQueue_Service;
import com.qa.helpqueue.ticket.Ticket;

@SpringBootTest
@ActiveProfiles(profiles = "test")
public class TicketServiceUnitTest {

	@Autowired
	private HelpQueue_Service service;

	@MockBean
	private HelpQueue_Repo repo;

	@Test
	void testCreateTicket() {
		Long id = 1L;
		Ticket newTicket = new Ticket("Title", "Author", 3, "Desc", "Urgency", "Topic", "Status", "Trainer", "Cohort");
		Ticket savedTicket = new Ticket("Title", "Author", 3, "Desc", "Urgency", "Topic", "Status", "Trainer",
				"Cohort");
		savedTicket.setID(id);

		Mockito.when(this.repo.save(newTicket)).thenReturn(savedTicket);
	}

	@Test
	void testGetTicket() {

		List<Ticket> tickets = new ArrayList<Ticket>();
		Long id = 1L;
		Ticket addedTicket = new Ticket("Title", "Author", 3, "Desc", "Urgency", "Topic", "Status", "Trainer",
				"Cohort");
		addedTicket.setID(id);
		tickets.add(addedTicket);

		Mockito.when(this.repo.findAll()).thenReturn(tickets);

		assertThat(this.service.getTicket()).isEqualTo(tickets);
	}

	@Test
	void testUpdateTicket() {
		Long id = 1L;
		Ticket newTicket = new Ticket("Another Title", "Another Author", 7, "Desc", "Urgency", "Topic", "Status",
				"Trainer", "Cohort");
		Ticket oldTicket = new Ticket("Title", "Author", 3, "Desc", "Urgency", "Topic", "Status", "Trainer", "Cohort");
		oldTicket.setID(id);
		Ticket updatedTicket = new Ticket("Another Title", "Another Author", 7, "Desc", "Urgency", "Topic", "Status",
				"Trainer", "Cohort");
		updatedTicket.setID(id);

		Mockito.when(this.repo.findById(id)).thenReturn(Optional.of(oldTicket));
		Mockito.when(this.repo.save(updatedTicket)).thenReturn(updatedTicket);

		assertThat(this.service.updateTicket(newTicket, id)).isEqualTo(updatedTicket);

	}

	@Test
	void testDeleteTicket() {
		Long id = 1L;
		Ticket toRemoveTicket = new Ticket("Title", "Author", 3, "Desc", "Urgency", "Topic", "Status", "Trainer",
				"Cohort");
		toRemoveTicket.setID(id);

		Mockito.when(this.repo.existsById(id)).thenReturn(false);

		assertThat(this.service.deleteTicket(id)).isEqualTo(true);

	}

	@Test
	void testToString() {
		Ticket ticket = new Ticket();
		String testedString = ticket.toString();
		assertEquals(testedString,
				"Ticket [ID=" + ticket.getID() + ", TicketTitle=" + ticket.getTicketTitle() + ", TicketAuthor="
						+ ticket.getTicketAuthor() + ", TicketTime=" + ticket.getTicketTime() + ", TicketDesc="
						+ ticket.getTicketDesc() + ", TicketUrgency=" + ticket.getTicketUrgency() + ", TicketTopic="
						+ ticket.getTicketTopic() + ", TicketStatus=" + ticket.getTicketStatus() + ", TicketTrainer="
						+ ticket.getTicketTrainer() + ", TicketCohort=" + ticket.getTicketCohort() + "]");

	}

}
