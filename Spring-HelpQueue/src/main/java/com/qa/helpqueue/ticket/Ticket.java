package com.qa.helpqueue.ticket;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Ticket {

	//attributes
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long ID;
		private String TicketTitle;
		private String TicketAuthor;
		private int TicketTime;
		private String TicketDesc;
		private String TicketUrgency;
		private String TicketTopic;
		private String TicketStatus;
		private String TicketTrainer;
		private String TicketCohort;
		
		public Ticket() {
			super();
		}
		
	// Constructor
		public Ticket(String ticketTitle, String ticketAuthor, int ticketTime, String ticketDesc,
				String ticketUrgency, String ticketTopic, String ticketStatus, String ticketTrainer, String ticketCohort) {
			super();
			this.TicketTitle = ticketTitle;
			this.TicketAuthor = ticketAuthor;
			this.TicketTime = ticketTime;
			this.TicketDesc = ticketDesc;
			this.TicketUrgency = ticketUrgency;
			this.TicketTopic = ticketTopic;
			this.TicketStatus = ticketStatus;
			this.TicketTrainer = ticketTrainer;
			this.TicketCohort = ticketCohort;
		}
	// Getters and Setters

		public Long getID() {
			return ID;
		}

		public void setID(Long iD) {
			ID = iD;
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

		public int getTicketTime() {
			return TicketTime;
		}

		public void setTicketTime(int ticketTime) {
			TicketTime = ticketTime;
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

		@Override
		public String toString() {
			return "Ticket [ID=" + ID + ", TicketTitle=" + TicketTitle + ", TicketAuthor=" + TicketAuthor
					+ ", TicketTime=" + TicketTime + ", TicketDesc=" + TicketDesc + ", TicketUrgency=" + TicketUrgency
					+ ", TicketTopic=" + TicketTopic + ", TicketStatus=" + TicketStatus + ", TicketTrainer="
					+ TicketTrainer + ", TicketCohort=" + TicketCohort + "]";
		}

		@Override
		public int hashCode() {
			final int prime = 31;
			int result = 1;
			result = prime * result + ((TicketAuthor == null) ? 0 : TicketAuthor.hashCode());
			result = prime * result + ((TicketCohort == null) ? 0 : TicketCohort.hashCode());
			result = prime * result + ((TicketDesc == null) ? 0 : TicketDesc.hashCode());
			result = prime * result + ((TicketStatus == null) ? 0 : TicketStatus.hashCode());
			result = prime * result + TicketTime;
			result = prime * result + ((TicketTitle == null) ? 0 : TicketTitle.hashCode());
			result = prime * result + ((TicketTopic == null) ? 0 : TicketTopic.hashCode());
			result = prime * result + ((TicketTrainer == null) ? 0 : TicketTrainer.hashCode());
			result = prime * result + ((TicketUrgency == null) ? 0 : TicketUrgency.hashCode());
			return result;
		}

		@Override
		public boolean equals(Object obj) {
			if (this == obj)
				return true;
			if (obj == null)
				return false;
			if (getClass() != obj.getClass())
				return false;
			Ticket other = (Ticket) obj;
			if (TicketAuthor == null) {
				if (other.TicketAuthor != null)
					return false;
			} else if (!TicketAuthor.equals(other.TicketAuthor))
				return false;
			if (TicketCohort == null) {
				if (other.TicketCohort != null)
					return false;
			} else if (!TicketCohort.equals(other.TicketCohort))
				return false;
			if (TicketDesc == null) {
				if (other.TicketDesc != null)
					return false;
			} else if (!TicketDesc.equals(other.TicketDesc))
				return false;
			if (TicketStatus == null) {
				if (other.TicketStatus != null)
					return false;
			} else if (!TicketStatus.equals(other.TicketStatus))
				return false;
			if (TicketTime != other.TicketTime)
				return false;
			if (TicketTitle == null) {
				if (other.TicketTitle != null)
					return false;
			} else if (!TicketTitle.equals(other.TicketTitle))
				return false;
			if (TicketTopic == null) {
				if (other.TicketTopic != null)
					return false;
			} else if (!TicketTopic.equals(other.TicketTopic))
				return false;
			if (TicketTrainer == null) {
				if (other.TicketTrainer != null)
					return false;
			} else if (!TicketTrainer.equals(other.TicketTrainer))
				return false;
			if (TicketUrgency == null) {
				if (other.TicketUrgency != null)
					return false;
			} else if (!TicketUrgency.equals(other.TicketUrgency))
				return false;
			return true;
		}
		
}

