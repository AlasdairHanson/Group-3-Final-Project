package com.qa.helpqueue.service;

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
		Ticket newTicket = new Ticket("Title", "Author", "2018-07-07 05:15:09", "Desc", "Urgency", "Topic", "Status", "Trainer", "Cohort");
		Ticket savedTicket = new Ticket("Title", "Author", "2018-07-07 05:15:09", "Desc", "Urgency", "Topic", "Status", "Trainer",
				"Cohort");
		savedTicket.setId(id);

		Mockito.when(this.repo.save(newTicket)).thenReturn(savedTicket);
	}

	@Test
	void testCallRepo() {
		assertEquals(false, repo.existsById(1L));
	}

	@Test
	void testGetTicket() {

		List<Ticket> tickets = new ArrayList<Ticket>();
		Long id = 1L;
		Ticket addedTicket = new Ticket("Title", "Author", "2018-07-07 05:15:09", "Desc", "Urgency", "Topic", "Status", "Trainer",
				"Cohort");
		addedTicket.setId(id);
		tickets.add(addedTicket);

		Mockito.when(this.repo.findAll()).thenReturn(tickets);

		assertThat(this.service.getTicket()).isEqualTo(tickets);
	}

	@Test
	void testUpdateTicket() {
		Long id = 1L;
		Ticket newTicket = new Ticket("Another Title", "Another Author", "2018-08-08 05:15:10", "Desc", "Urgency", "Topic", "Status",
				"Trainer", "Cohort");
		Ticket oldTicket = new Ticket("Title", "Author", "2018-07-07 05:15:09", "Desc", "Urgency", "Topic", "Status", "Trainer", "Cohort");
		oldTicket.setID(id);
		Ticket updatedTicket = new Ticket("Another Title", "Another Author", "2018-08-08 05:15:10", "Desc", "Urgency", "Topic", "Status",
				"Trainer", "Cohort");
		updatedTicket.setID(id);

		Mockito.when(this.repo.findById(id)).thenReturn(Optional.of(oldTicket));
		Mockito.when(this.repo.save(updatedTicket)).thenReturn(updatedTicket);

		assertThat(this.service.updateTicket(newTicket, id)).isEqualTo(updatedTicket);

	}

	@Test
	void testDeleteTicket() {
		Long id = 1L;
		Ticket toRemoveTicket = new Ticket("Title", "Author", "2018-07-07 05:15:09", "Desc", "Urgency", "Topic", "Status", "Trainer",
				"Cohort");
		toRemoveTicket.setId(id);

		Mockito.when(this.repo.existsById(id)).thenReturn(false);

		assertThat(this.service.deleteTicket(id)).isEqualTo(true);

	}

	@Test
	void testToString() {
		Ticket ticket = new Ticket();
		String testedString = ticket.toString();
		assertEquals(testedString,
				"Ticket [id=" + ticket.getID() + ", title=" + ticket.getTitle() + ", author="
						+ ticket.getAuthor() + ", time=" + ticket.getTimestamp() + ", content="
						+ ticket.getContent() + ", priority=" + ticket.getPriority() + ", topic="
						+ ticket.getTopic() + ", status=" + ticket.getStatus() + ", trainer="
						+ ticket.getTrainer() + ", cohort=" + ticket.getCohort() + "]");

	}

}
