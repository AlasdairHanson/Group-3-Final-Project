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
        private String TicketTime;
        private String TicketDesc;
        private String priority;
        private String topic;
        private String status;
        private String TicketTrainer;
        private String cohort;
        
        public Ticket() {
            super();
        }
        
    // Constructor
        public Ticket(String ticketTitle, String ticketAuthor, String ticketTime, String ticketDesc,
                String ticketUrgency, String ticketTopic, String ticketStatus, String ticketTrainer, String ticketCohort) {
            super();
            this.TicketTitle = ticketTitle;
            this.TicketAuthor = ticketAuthor;
            this.TicketTime = ticketTime;
            this.TicketDesc = ticketDesc;
            this.priority = ticketUrgency;
            this.topic = ticketTopic;
            this.status = ticketStatus;
            this.TicketTrainer = ticketTrainer;
            this.cohort = ticketCohort;
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

 

        public String getTicketTime() {
            return TicketTime;
        }

 

        public void setTicketTime(String ticketTime) {
            TicketTime = ticketTime;
        }

 

        public String getTicketDesc() {
            return TicketDesc;
        }

 

        public void setTicketDesc(String ticketDesc) {
            TicketDesc = ticketDesc;
        }

 

        public String getTicketUrgency() {
            return priority;
        }

 

        public void setTicketUrgency(String ticketUrgency) {
            priority = ticketUrgency;
        }

 

        public String getTicketTopic() {
            return topic;
        }

 

        public void setTicketTopic(String ticketTopic) {
            topic = ticketTopic;
        }

 

        public String getTicketStatus() {
            return status;
        }

 

        public void setTicketStatus(String ticketStatus) {
            status = ticketStatus;
        }

 

        public String getTicketTrainer() {
            return TicketTrainer;
        }

 

        public void setTicketTrainer(String ticketTrainer) {
            TicketTrainer = ticketTrainer;
        }

 

        public String getTicketCohort() {
            return cohort;
        }

 

        public void setTicketCohort(String ticketCohort) {
            cohort = ticketCohort;
        }

 

        @Override
        public String toString() {
            return "Ticket [ID=" + ID + ", TicketTitle=" + TicketTitle + ", TicketAuthor=" + TicketAuthor
                    + ", TicketTime=" + TicketTime + ", TicketDesc=" + TicketDesc + ", TicketUrgency=" + priority
                    + ", TicketTopic=" + topic + ", TicketStatus=" + status + ", TicketTrainer="
                    + TicketTrainer + ", TicketCohort=" + cohort + "]";
        }

		@Override
		public int hashCode() {
			final int prime = 31;
			int result = 1;
			result = prime * result + ((TicketAuthor == null) ? 0 : TicketAuthor.hashCode());
			result = prime * result + ((cohort == null) ? 0 : cohort.hashCode());
			result = prime * result + ((TicketDesc == null) ? 0 : TicketDesc.hashCode());
			result = prime * result + ((status == null) ? 0 : status.hashCode());
			result = prime * result + ((TicketTime == null) ? 0 : TicketTime.hashCode());
			result = prime * result + ((TicketTitle == null) ? 0 : TicketTitle.hashCode());
			result = prime * result + ((topic == null) ? 0 : topic.hashCode());
			result = prime * result + ((TicketTrainer == null) ? 0 : TicketTrainer.hashCode());
			result = prime * result + ((priority == null) ? 0 : priority.hashCode());
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
			if (cohort == null) {
				if (other.cohort != null)
					return false;
			} else if (!cohort.equals(other.cohort))
				return false;
			if (TicketDesc == null) {
				if (other.TicketDesc != null)
					return false;
			} else if (!TicketDesc.equals(other.TicketDesc))
				return false;
			if (status == null) {
				if (other.status != null)
					return false;
			} else if (!status.equals(other.status))
				return false;
			if (TicketTime == null) {
				if (other.TicketTime != null)
					return false;
			} else if (!TicketTime.equals(other.TicketTime))
				return false;
			if (TicketTitle == null) {
				if (other.TicketTitle != null)
					return false;
			} else if (!TicketTitle.equals(other.TicketTitle))
				return false;
			if (topic == null) {
				if (other.topic != null)
					return false;
			} else if (!topic.equals(other.topic))
				return false;
			if (TicketTrainer == null) {
				if (other.TicketTrainer != null)
					return false;
			} else if (!TicketTrainer.equals(other.TicketTrainer))
				return false;
			if (priority == null) {
				if (other.priority != null)
					return false;
			} else if (!priority.equals(other.priority))
				return false;
			return true;
		}


 

        
        
}
