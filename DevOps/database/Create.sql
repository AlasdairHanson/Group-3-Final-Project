DROP DATABASE IF EXISTS project;

CREATE DATABASE project;
USE project;

DROP TABLE IF EXISTS `ticket`;

CREATE TABLE `ticket` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `ticket_title` VARCHAR(255) NOT NULL,
    `ticket_author` VARCHAR(255) NOT NULL,
    `ticket_time` VARCHAR(255) NOT NULL,
    `ticket_desc` VARCHAR(255),
    `ticket_urgency` VARCHAR(255) NOT NULL,
    `ticket_topic` VARCHAR(255),
    `ticket_status` VARCHAR(255),
    `ticket_trainer` VARCHAR(255) NOT NULL,
    `ticket_cohort` VARCHAR(255) NOT NULL
);


