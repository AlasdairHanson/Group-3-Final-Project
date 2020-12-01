package com.qa.wishlist.service;

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

	}

	@Test
	void testUpdateTicket() {

	}

	@Test
	void testDeleteTicket() {

	}

}
