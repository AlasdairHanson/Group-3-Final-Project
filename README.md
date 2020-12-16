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

Our group has been tasked with 

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

- **Controller**: Contains addresses for different HTTP request types and header and body contents. The frontend sends a HTTP CRUD request targeting a specific controller address. The controller returns a ResponseEntity containing a ticket object and HTTP status code.
- **Service**: Contains methods for passing in data to the repository and returning the result as a ticket object to the controller.
- **Repository**: An interface that extends the Spring Boot JpaRepository class. It exposes methods that translate requests by the service into SQL requests for the connected RDS.





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


[backendtests]:https://i.imgur.com/ZuPZr5m.png
[backendcoverage]:https://i.imgur.com/4CI1HcH.png


