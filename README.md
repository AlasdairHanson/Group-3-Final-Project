# Group 3 Final Project

## Resources (All)
---
- Presentation:
- Jira Board:
- Risk Assessment:

## Contents (All)
---


## Brief (All)
---

Our group has been tasked with designing, developing and deploying a full-stack application 

### Requirements

In addition to the brief, we are also required to include:

- 

## Project Management (All)
---

## Risk Assesment (Basia + Abdul)
---

## Research (Reece)
---

### Market Research Meeting
erfgwererg

### other subtitle
wefwefwefwef

## FrontEnd Design (Reece)
---

## Architecture (+ ERDs) 
---

### Frontend (Reece)

### Backend (Alasdair)

The backend is a micro service running on Spring Boot that enables the frontend to communicate with a database. It is deployed inside a Docker container where it listens for HTTP CRUD (Create, Read, Update, Delete) requests from the frontend and performs SQL queries on a connected database.

![Backend Diagram](https://user-images.githubusercontent.com/71394754/102358242-33700600-3fa7-11eb-87ee-e2fd9c46bc9f.png)

The structure of the backend consists of 3 components:

- **Controller**: Contains addresses for different HTTP request types and header and body contents. The frontend sends a HTTP CRUD request targeting a specific controller address. The controller returns a ResponseEntity containing a ticket object or list of tickets and an HTTP status code.
- **Service**: Contains methods for passing in data to the repository and returning the result as a ticket object to the controller.
- **Repository**: An interface that extends the Spring Boot JpaRepository class. It exposes methods that translate requests by the service into SQL requests for the connected RDS. The repository is referenced as an object in the service called "repo".

![Backend Diagram 2](https://user-images.githubusercontent.com/71394754/102369313-b434ff00-3fb3-11eb-9ffe-e7211d46cfc6.png)

The above diagram shows the structure of the backend and the interaction between its components. 

**1.** The controller listens for a POST, GET, PUT or DELETE HTTP request from the frontend that targets a specific controller address. Depending on the type of request, the backend has multiple methods that provide different functionality to each CRUD request type. A POST method will look for a JSON object in the body of the request and map it to the ticket data model. A GET method will look for a value in the header of the request to use as a search parameter for querying the database. 

**2.** The service contains methods that each controller method calls on to perform queries on the database. Each service method is paired with a controller method where it will receive any header or body parameters sent from the controller to be then plugged into the repository query. The service then calls a repository method that performs the SQL query on the connected database.

**3.** The repository is an interface that provides methods to perform SQL requests. POST methods in the service will use the "save" method of the repository which is then translated to an "INSERT INTO" SQL command. GET methods will use "findAll" which trainslates to "SELECT FROM" SQL commands. More specific methods can be created in the repository that translate to commands that target certain data. Some of the GET methods use these specific methods to retrieve a filtered or sorted list of database records.



### DevOps (Abdul + Alanzo)

**Ci Pipeline (Basia)

**Usage Requirements (Abdul)

**Walkthrough (Abdul)

## Testing (Basia)
---
![backendtests][backendtests]
![backendcoverage][backendcoverage]



## Improvements (All)
---

## Acknowledgements (All)
---

## Authors 
---

- Alanzo Davis
- Basia Adamiec
- Abdul Shaker
- Alasdair Hanson
- Reece Elder
- Jinx the Cat

[backendtests]:https://i.imgur.com/ZuPZr5m.png
[backendcoverage]:https://i.imgur.com/4CI1HcH.png


