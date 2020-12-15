CREATE TABLE ticket (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    ticket_title VARCHAR(255),
    ticket_author VARCHAR(255),
    ticket_time DATETIME,
    ticket_desc VARCHAR(255),
    priority VARCHAR(255),
    topic VARCHAR(255),
    status VARCHAR(255),
    ticket_trainer VARCHAR(255),
    cohort VARCHAR(255)

);