DROP DATABASE IF EXISTS project;


CREATE DATABASE project;
USE project;

DROP TABLE ticket;

CREATE TABLE ticket (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    author VARCHAR(255),
    timestamp DATETIME,
    content VARCHAR(255),
    priority VARCHAR(255),
    topic VARCHAR(255),
    status VARCHAR(255),
    trainer VARCHAR(255),
    cohort VARCHAR(255)

);

insert into ticket (id, title, author, timestamp, content, priority, topic, status, trainer, cohort) values (1, 'pede libero quis orci nullam molestie nibh', 'Gwenneth Aird', '11/21/2020', 'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.', 'Low', 'Privacy', 'Resolved', 'Kass Dundredge', 'Other');
insert into ticket (id, title, author, timestamp, content, priority, topic, status, trainer, cohort) values (2, 'id sapien in sapien iaculis congue', 'Mellisa Habershaw', '4/15/2020', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.', 'Medium', 'Networking', 'Unresolved', 'Merralee Sleford', 'Software');
insert into ticket (id, title, author, timestamp, content, priority, topic, status, trainer, cohort) values (3, 'varius nulla', 'Edith Benoit', '4/10/2020', 'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.', 'High', 'Hardware', 'Unresolved', 'Paul Epsley', 'Other');
insert into ticket (id, title, author, timestamp, content, priority, topic, status, trainer, cohort) values (4, 'dui nec nisi', 'Collete Dohrmann', '4/13/2020', 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.', 'Medium', 'Networking', 'Ongoing', 'Rici Stoffersen', 'Devops');
insert into ticket (id, title, author, timestamp, content, priority, topic, status, trainer, cohort) values (5, 'ultrices vel augue vestibulum ante ipsum primis in faucibus orci', 'Crissie Karlolak', '1/24/2020', 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'Low', 'Other', 'Unresolved', 'Arlyn Jilkes', 'Cloudnative');
insert into ticket (id, title, author, timestamp, content, priority, topic, status, trainer, cohort) values (6, 'felis sed lacus morbi sem mauris', 'Corbie Dunster', '10/29/2020', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 'Critical', 'Security', 'Unresolved', 'Zelma Binney', 'Cloudnative');
insert into ticket (id, title, author, timestamp, content, priority, topic, status, trainer, cohort) values (7, 'cursus vestibulum proin eu', 'Pavla Skarin', '1/16/2020', 'In sagittis dui vel nisl. Duis ac nibh.', 'Medium', 'Networking', 'Ongoing', 'Maire Humbee', 'Other');
insert into ticket (id, title, author, timestamp, content, priority, topic, status, trainer, cohort) values (8, 'cum sociis natoque penatibus', 'Issi Webber', '6/27/2020', 'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.', 'High', 'Security', 'Resolved', 'Kalie Beckmann', 'Devops');
insert into ticket (id, title, author, timestamp, content, priority, topic, status, trainer, cohort) values (9, 'proin leo odio porttitor id consequat in consequat ut nulla', 'Nerta Scrivener', '10/26/2020', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 'Low', 'Other', 'Ongoing', 'Alva Pisco', 'Other');
insert into ticket (id, title, author, timestamp, content, priority, topic, status, trainer, cohort) values (10, 'at velit eu est congue', 'Brunhilda Langwade', '4/23/2020', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 'High', 'Privacy', 'Ongoing', 'Haily Habert', 'Testing');
insert into ticket (id, title, author, timestamp, content, priority, topic, status, trainer, cohort) values (11, 'lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum', 'Nicola Skerman', '6/13/2020', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 'Critical', 'Other', 'Unresolved', 'Fiona Imort', 'Software');
insert into ticket (id, title, author, timestamp, content, priority, topic, status, trainer, cohort) values (12, 'id ornare imperdiet sapien urna pretium', 'Annadiane Petraitis', '7/29/2020', 'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.', 'Low', 'Networking', 'Ongoing', 'Avictor Ablitt', 'Devops');
insert into ticket (id, title, author, timestamp, content, priority, topic, status, trainer, cohort) values (13, 'purus sit amet nulla', 'Justina Soppitt', '8/1/2020', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.', 'Critical', 'Other', 'Resolved', 'Cordie Mounsie', 'Testing');
insert into ticket (id, title, author, timestamp, content, priority, topic, status, trainer, cohort) values (14, 'nibh ligula nec sem duis aliquam', 'Willem Wickling', '8/15/2020', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 'Low', 'Hardware', 'Ongoing', 'Gabby Wadesworth', 'Software');
insert into ticket (id, title, author, timestamp, content, priority, topic, status, trainer, cohort) values (15, 'quis libero', 'Willy Pinnocke', '2/24/2020', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 'Low', 'Security', 'Unresolved', 'Cullen Azema', 'Other');
insert into ticket (id, title, author, timestamp, content, priority, topic, status, trainer, cohort) values (16, 'interdum mauris non ligula pellentesque ultrices phasellus id sapien', 'Gerhardine Vedenichev', '8/27/2020', 'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.', 'High', 'Networking', 'Unresolved', 'Lona McKain', 'Software');
insert into ticket (id, title, author, timestamp, content, priority, topic, status, trainer, cohort) values (17, 'nisl aenean lectus pellentesque', 'Virgie Balm', '7/31/2020', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 'Low', 'Other', 'Resolved', 'Whit Steljes', 'Devops');
insert into ticket (id, title, author, timestamp, content, priority, topic, status, trainer, cohort) values (18, 'donec dapibus duis at velit', 'Barnebas Longhorn', '10/19/2020', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 'Medium', 'Security', 'Resolved', 'Natasha Guslon', 'Cloudnative');
insert into ticket (id, title, author, timestamp, content, priority, topic, status, trainer, cohort) values (19, 'nulla sed accumsan felis ut', 'Gennifer Laity', '10/5/2020', 'Phasellus sit amet erat. Nulla tempus.', 'Medium', 'Other', 'Ongoing', 'Vonny Kubin', 'Other');
insert into ticket (id, title, author, timestamp, content, priority, topic, status, trainer, cohort) values (20, 'augue quam sollicitudin vitae', 'Teodorico Fears', '10/28/2020', 'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.', 'Low', 'Security', 'Resolved', 'Jakie Inchcomb', 'Software');



