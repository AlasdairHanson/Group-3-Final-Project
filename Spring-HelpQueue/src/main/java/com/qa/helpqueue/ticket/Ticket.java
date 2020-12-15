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
        private Long id;
        private String title;
        private String author;
        private String timestamp;
        private String description;
        private String priority;
        private String topic;
        private String status;
        private String trainer;
        private String cohort;
        
        public Ticket() {
            super();
        }
        
    // Constructor
        public Ticket(String ticketTitle, String ticketAuthor, String ticketTime, String ticketDesc,
                String ticketUrgency, String ticketTopic, String ticketStatus, String ticketTrainer, String ticketCohort) {
            super();
            this.title = ticketTitle;
            this.author = ticketAuthor;
            this.timestamp = ticketTime;
            this.description = ticketDesc;
            this.priority = ticketUrgency;
            this.topic = ticketTopic;
            this.status = ticketStatus;
            this.trainer = ticketTrainer;
            this.cohort = ticketCohort;
        }
    // Getters and Setters

 

        public Long getID() {
            return id;
        }

 

        public void setID(Long iD) {
            id = iD;
        }

 

        public String getTicketTitle() {
            return title;
        }

 

        public void setTicketTitle(String ticketTitle) {
            title = ticketTitle;
        }

 

        public String getTicketAuthor() {
            return author;
        }

 

        public void setTicketAuthor(String ticketAuthor) {
            author = ticketAuthor;
        }

 

        public String getTicketTime() {
            return timestamp;
        }

 

        public void setTicketTime(String ticketTime) {
            timestamp = ticketTime;
        }

 

        public String getTicketDesc() {
            return description;
        }

 

        public void setTicketDesc(String ticketDesc) {
            description = ticketDesc;
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
            return trainer;
        }

 

        public void setTicketTrainer(String ticketTrainer) {
            trainer = ticketTrainer;
        }

 

        public String getTicketCohort() {
            return cohort;
        }

 

        public void setTicketCohort(String ticketCohort) {
            cohort = ticketCohort;
        }

 

        @Override
        public String toString() {
            return "Ticket [ID=" + id + ", TicketTitle=" + title + ", TicketAuthor=" + author
                    + ", TicketTime=" + timestamp + ", TicketDesc=" + description + ", TicketUrgency=" + priority
                    + ", TicketTopic=" + topic + ", TicketStatus=" + status + ", TicketTrainer="
                    + trainer + ", TicketCohort=" + cohort + "]";
        }

		@Override
		public int hashCode() {
			final int prime = 31;
			int result = 1;
			result = prime * result + ((author == null) ? 0 : author.hashCode());
			result = prime * result + ((cohort == null) ? 0 : cohort.hashCode());
			result = prime * result + ((description == null) ? 0 : description.hashCode());
			result = prime * result + ((status == null) ? 0 : status.hashCode());
			result = prime * result + ((timestamp == null) ? 0 : timestamp.hashCode());
			result = prime * result + ((title == null) ? 0 : title.hashCode());
			result = prime * result + ((topic == null) ? 0 : topic.hashCode());
			result = prime * result + ((trainer == null) ? 0 : trainer.hashCode());
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
			if (author == null) {
				if (other.author != null)
					return false;
			} else if (!author.equals(other.author))
				return false;
			if (cohort == null) {
				if (other.cohort != null)
					return false;
			} else if (!cohort.equals(other.cohort))
				return false;
			if (description == null) {
				if (other.description != null)
					return false;
			} else if (!description.equals(other.description))
				return false;
			if (status == null) {
				if (other.status != null)
					return false;
			} else if (!status.equals(other.status))
				return false;
			if (timestamp == null) {
				if (other.timestamp != null)
					return false;
			} else if (!timestamp.equals(other.timestamp))
				return false;
			if (title == null) {
				if (other.title != null)
					return false;
			} else if (!title.equals(other.title))
				return false;
			if (topic == null) {
				if (other.topic != null)
					return false;
			} else if (!topic.equals(other.topic))
				return false;
			if (trainer == null) {
				if (other.trainer != null)
					return false;
			} else if (!trainer.equals(other.trainer))
				return false;
			if (priority == null) {
				if (other.priority != null)
					return false;
			} else if (!priority.equals(other.priority))
				return false;
			return true;
		}


 

        
        
}
