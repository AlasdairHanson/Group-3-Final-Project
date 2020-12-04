DROP DATABASE IF EXISTS ticketTestdb;

CREATE DATABASE ticketTestdb;
USE ticketTestdb;


DROP TABLE IF EXISTS `ticket`;

CREATE TABLE `ticket` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `ticketTitle` VARCHAR(255) NOT NULL,
    `ticketAuthor` VARCHAR(255) NOT NULL,
    `ticketTime` BIGINT NOT NULL,
    `ticketDesc` VARCHAR(255),
    `ticketUrgency` VARCHAR(255) NOT NULL,
    `ticketTopic` VARCHAR(255),
    `ticketStatus` VARCHAR(255),
    `ticketTrainer` VARCHAR(255) NOT NULL,
    `ticketCohort` VARCHAR(255) NOT NULL,

);
