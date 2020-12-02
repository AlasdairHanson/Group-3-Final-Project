package com.qa.wishlist;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.qa.helpqueue.ticket.Ticket;

import nl.jqno.equalsverifier.EqualsVerifier;

@SpringBootTest
class SpringHelpQueueApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	void MoarCoverage() {
		EqualsVerifier.forClass(Ticket.class).usingGetClass().verify();
	}

}
