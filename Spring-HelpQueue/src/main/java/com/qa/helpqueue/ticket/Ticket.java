package com.qa.helpqueue.ticket;

public class Ticket {

	//attributes
		int ID;
		String TicketTitle;
		String TicketAuthor;
		int TicketTime;
		String TicketDesc;
		String TicketUrgency;
		String TicketTopic;
		String TicketStatus;
		String TicketTrainer;
		String TicketCohort;
		
	// Constructor
		public Ticket(int id, String ticketTitle, String ticketAuthor, int ticketTime, String ticketDesc,
				String ticketUrgency, String ticketTopic, String ticketStatus, String ticketTrainer, String ticketCohort) {
			super();
			ID = id;
			TicketTitle = ticketTitle;
			TicketAuthor = ticketAuthor;
			TicketTime = ticketTime;
			TicketDesc = ticketDesc;
			TicketUrgency = ticketUrgency;
			TicketTopic = ticketTopic;
			TicketStatus = ticketStatus;
			TicketTrainer = ticketTrainer;
			TicketCohort = ticketCohort;
		}
	// Getters and Setters
		public int getID() {
			return ID;
		}
		public void setID(int id) {
			ID = id;
		}
		public String getTicketTitle() {
			return TicketTitle;
		}
		public void setTicketTitle(String ticketTitle) {
			TicketTitle = ticketTitle;
		}
		public String getTicketAuthor() {
			return TicketAuthor;
		}
		public void setTicketAuthor(String ticketAuthor) {
			TicketAuthor = ticketAuthor;
		}
		public String getTicketDesc() {
			return TicketDesc;
		}
		public void setTicketDesc(String ticketDesc) {
			TicketDesc = ticketDesc;
		}
		public String getTicketUrgency() {
			return TicketUrgency;
		}
		public void setTicketUrgency(String ticketUrgency) {
			TicketUrgency = ticketUrgency;
		}
		public String getTicketTopic() {
			return TicketTopic;
		}
		public void setTicketTopic(String ticketTopic) {
			TicketTopic = ticketTopic;
		}
		public String getTicketStatus() {
			return TicketStatus;
		}
		public void setTicketStatus(String ticketStatus) {
			TicketStatus = ticketStatus;
		}
		public String getTicketTrainer() {
			return TicketTrainer;
		}
		public void setTicketTrainer(String ticketTrainer) {
			TicketTrainer = ticketTrainer;
		}
		public String getTicketCohort() {
			return TicketCohort;
		}
		public void setTicketCohort(String ticketCohort) {
			TicketCohort = ticketCohort;
		}

		public int getTicketTime() {
			return TicketTime;
		}

		public void setTicketTime(int ticketTime) {
			TicketTime = ticketTime;
		}
		
}

