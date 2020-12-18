# Group 3 Final Project

## Resources (All)
---
- Presentation: https://docs.google.com/presentation/d/189885tIabEeBWLpyj9cMJktKJI-QuxkrAzXRBUzYJbs/edit#slide=id.p
- Jira Board: https://badamiec.atlassian.net/jira/software/projects/FP/boards/7/roadmap
- Risk Assessment: https://docs.google.com/document/d/1-s6Nb3pVpPESHO-dkETj3pFdLD4nn2W6fpx4A692_sw/edit

## Contents
* [Brief](#brief)
   * [Requirements](#requirements)
* [Project Management](#project-management)
* [Risk Assessment](#risk-assessment)
* [Research](#research)
   * [Market Research Meeting](#market-research-meeting)
   * [other subtitle](#other-subtitle)
* [Front-End Design](#front-end-design)
* [Architecture](#architecture)
   * [Frontend](#frontend)
   * [Backend](#backend)
* [DevOps](#devops)
   * [CI Pipeline](#ci-pipeline)
   * [Terraform](#terraform)
   * [Jenkins](#jenkins)
   * [Kubernetes](#kubernetes)
* [Testing](#testing)
   * [Postman Testing](#postman-testing)
   * [Backend Testing](#backendtesting)
   * [Frontend Testing](#frontend-testing)
* [Improvements](#improvements)
* [Authors](#authors)


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

After setting up the core brief requirements of the project from the requirements documents we recquired some more indepth knowledge into the specific needs that the client (QA) requires or would like to be included in the final project. This was conducted by having an indepth customer focus interview with the stakeholders, askihng questions about the brief and what other features may have been missed and are more imporrant. 

From the interview the following points were raised, so we had to ensure our product hit these criteria: 
**1.** Sorting and assigning tickets to cohorts was vital for this ticket queue system. This is so that trainers know which tickets are likely to be assigned to them, as well as allowing trainees to see other peoples tickets from their cohort (who likely have similar issues)

**2.** When setting a ticket as resolved, it should not be deleted automatically from the database. Deleting a ticket is a necessecity, so as to stop the DB from becoming too clustered. But keeping resolved allows others to see the resolution.

**3.** The application will be owned by QA and shouldn't clash with the existing QA Academy softwares, for example QA Community. The design should be similar and share an aesthetic value with the existing softwares so that they can sit alongside eachother. 

The Market Research was a beneficial task to complete first, as it gave us an indication of which of the stretch goals are important to focus on. Its important for a project given to us by a client to include the 'Would Have's/ Could Have's' that are important to the client, rather than that are important for us as the Devs to do. 

## FrontEnd Design (Reece)
### ERD Components

React as a front end framework uses JS functional programing to design a webpage, part of this is in implementing reusable and modular components for the purpose of keeping code DRY, only loading and rerending components that need it (saving resources) and allowing easier transfer of data. 

The below diagram is the final ERD Component tree for the application. It shows the Parent and Child relationship of each component. 
In this diagram useState has been implemented in parent components, and is at the highest common component for branches that require shared use of a state prop.

![ComponentErd](https://user-images.githubusercontent.com/71394624/102592644-a8f4e700-410b-11eb-9c96-57d3d47fac4f.png)

### Existing Softwares

After Market research with QA we found out the current existing software in use by themselves is the communication methods already implemented. This is primarily Microsoft Teams text and video call. Downsides of using this existing software is that there isn't a dedicated channel for help requests so problems can be lost in the stream of messages. This method is also a closed method, where people posting tickets and asking for help cannot see other people with the same issues that may be able to work together to resolve it. The core of this ticket queue is that people can post the problems they're having, allowing anyone to effectively help with the problem.

Existing software already exists for ticket queue systems, with the software looking functional but clinical. 
By clinical a lot of the softwares are powered by an RDS (much like this application) and use this in their design, making a table with headers mimicing the RDS but with improving the aesthetics. This produces a website which doesnt seem to be static and isn't intutitive to navigate around. An important aspect of this app for our team was to give the software a materialistic feel, with tickets on the page 'having weight'. This is done by incorporating flat shadow and depth, and ensuring the app is not static. 

### Initial Sketches

Some initial designs of the CRUD are outlined below, with the final product being a colloboration between the two differing styles and designs:
![Front End Mockup(1)](https://user-images.githubusercontent.com/71394624/102593850-4bfa3080-410d-11eb-896e-b841920fa190.png)
![Frontend-Design](https://user-images.githubusercontent.com/71394624/102593860-50264e00-410d-11eb-8a6a-b5cf466338ff.png)

One of the original potential designs for the final application was using a post it note type system, similar to a realworld notice board. This gave the final design a real sense of physicality, which could potentially involve a real video of post it notes being posted and removed, with the text content added in programmatically and rendered. 

![Asset 5](https://user-images.githubusercontent.com/71394624/102594089-a5faf600-410d-11eb-9f2a-ce2f97daa511.png) ![Asset 6](https://user-images.githubusercontent.com/71394624/102594091-a7c4b980-410d-11eb-9eb4-0d7e7cb70df5.png)

This in practice seemed too much work for the scope of this project, but is something that could be considred as a stretch goal. 

## Architecture (+ ERDs) 
---

### Frontend (Reece)

The Final frontend is a React.JS application utilising React Bootstrap for the Grid functionality and a variety of other frameworks for the graphical and functional aspects.

<p align="center">
  <img width=60% src="https://user-images.githubusercontent.com/71394624/102595049-ef981080-410e-11eb-86a6-57ff64a5dc2b.png">
  <img width=60% src="https://user-images.githubusercontent.com/71394624/102595092-fd4d9600-410e-11eb-8fb2-2a1291ae72e5.png">
  <img width=60% src="https://user-images.githubusercontent.com/71394624/102595100-00488680-410f-11eb-8887-0aa46756e5d2.png">
  <img width=60% src="https://user-images.githubusercontent.com/71394624/102595108-02aae080-410f-11eb-89ac-8d2a6cef18d2.png">
  <img width=60% src="https://user-images.githubusercontent.com/71394624/102595123-05a5d100-410f-11eb-8477-6aead239d388.png">
  <img width=60% src="https://user-images.githubusercontent.com/71394624/102595175-1c4c2800-410f-11eb-8fe3-39555ee8542c.png">
</p>
                                                                                                                            
The above images are screenshots of the front end design showing the functionality of the website, contents of the website are:
**1.** Login Page

**2.** Ticket Page

**3.** Solutions Page

**4.** Add Ticket Modal

**5.** Edit Ticket Modal

**6.** Sort and Filtering Sidebar

**7.** Reactive Nav Bar

### Backend (Alasdair)

The backend is a Spring Boot application written in Java SE that enables the frontend to communicate with a database. It is deployed inside a Docker container where it listens for HTTP CRUD (Create, Read, Update, Delete) requests from the frontend and performs SQL queries on a connected database.

![Backend Diagram](https://user-images.githubusercontent.com/71394754/102358242-33700600-3fa7-11eb-87ee-e2fd9c46bc9f.png)

The structure of the backend consists of 3 components:

- **Controller**: Contains addresses for different HTTP request types and header and body contents. The frontend sends a HTTP CRUD request targeting a specific controller address. The controller returns a ResponseEntity containing a ticket object or list of tickets and an HTTP status code.
- **Service**: Contains methods for passing in data to the repository and returning the result as a ticket object to the controller.
- **Repository**: An interface that extends the Spring Boot JpaRepository class. It exposes methods that translate requests by the service into SQL requests for the connected database. The repository is referenced as an object in the service called "repo".

![Ticket Model](https://user-images.githubusercontent.com/71394754/102543937-f6416c00-40ab-11eb-907e-b871ebf21a9b.png)

The backend contains a class called **Ticket** that serves as a data model for what incoming JSON values should map to in order to create a ticket object. Each attribute in the class must match the schema of the database for the object to be inserted correctly. 

![Backend Diagram 2](https://user-images.githubusercontent.com/71394754/102478984-31b14b80-4056-11eb-8109-96165420019c.png)

The above diagram shows the structure of the backend and the interaction between its components. 


**1.** The controller listens for a POST, GET, PUT or DELETE HTTP request from the frontend that targets a specific controller address. Depending on the type of request, the backend has multiple methods that provide different functionality to each CRUD request type. A POST method will look for a JSON object in the body of the request and map it to the ticket data model. A GET method will look for a value in the header of the request to use as a search parameter for querying the database. 

The update controller method requires a header value corresponding to the id of the ticket record that needs to be updated, and a JSON body containing the new values of the targeted ticket record.

**2.** The service contains methods that each controller method calls on to perform queries on the database. Each service method is paired with a controller method where it will receive any header or body parameters sent from the controller to be then plugged into the repository query. The service then calls a repository method that performs the SQL query on the connected database.

**3.** The repository is an interface that provides methods to perform SQL requests. POST methods in the service will use the "save" method of the repository which is then translated to an "INSERT INTO" SQL command. GET methods will use "findAll" which translates to "SELECT FROM" SQL commands. More specific methods can be created in the repository that translate to commands that target certain data. Some of the GET methods use these specific methods to retrieve a filtered or sorted list of database records.

**4.** Once the query to the database has been completed, the controller will return the result to the frontend with an HTTP status code.

## DevOps (Abdul + Alanzo)

### CI Pipeline
---
Below is an image showing the Continuous Integration pipeline used to deploy and continuously configure the Help Queue application.

![pipeline][pipeline]

This pipeline allows for rapid and simple development-to-deployment by automating the integration process. Code can be produced and pushed to GitHub, which will automatically push the new code to Jenkins via a webhook trigger. When a change is made to the Java and/or React source code, the git repository is pulled down by Jenkins. From there, tests are automatically ran in a separate testing environment from the live cluster to ensure the application will function correctly, and other build stages performed. Upon successful testing, Docker images of the backend and frontend are built and pushed up to Docker Hub, and pulled down in the last stage for Kubernetes deployment.

### Terraform
Terraform is an Infrastructure as Code software tool which allows us to automate deployment of architecture. With this we automated the creation of the Elastic Kubernetes
Service (EKS) as well as its nodes. We also created the two RDS instances required for testing and deployment and all aws instances required by the application. All of these
services are in a VPC with the RDS sitting in a private subnet and the aws_instances in public subnets, however this will later be changed and only accessible with a Bastion 
Host. (public subnet utilized for all contributors to access the Jenkins pipeline efficiently).
Modules were used to prevent duplication of code and improve reusability, meaning less files need to be configured as new infrastructure is provisioned.
Utilized Terraform v0.14.2 to prevent sensitive files from being visible in terraform plan and apply, which can be seen below.

* Please note a terraform.tfvars file is required for the plan to be executed successfully, these are required variables for the databases which are the masterusername and masterpassword. (prevent variables being exposed on github)

![Terraform](https://user-images.githubusercontent.com/71396007/102594320-f07c7280-410d-11eb-859a-76dd05fa3d3d.png)


### Jenkins 

Jenkins is a continuous integration server. The above process is automated by a Jenkins pipeline job with distinct build stages. If a build stage fails, the subsequent stages are not executed and the job will fail altogether to prevent non-functioning code from altering the live environment. Detailed console outputs are provided at each stage.

The main build stages in this project are:
* Pulling code from a Git respository after a web hook is triggered by a change to the repository
* The backend code is tested
* The backend image is built and pushed up to Docker Hub (then removed locally to regain disk space)
* The frontend code is tested
* The frontend image is built and pushed to Docker Hub (then removed locally to regain disk space)
* The Docker containers running in and managed by the Kubernetes cluster are updated with the latest Docker images


The image below shows all the stages of the build.

![jenkins][jenkins]

### Kubernetes
Kubernetes is an Orchestration system for automating deployment and managing containerized applications. We used this to allow the websites to be hosted through a load balancer in order for the website to be visible through the external ip within the EKS. This is done by using docker images which are then created into pods with specific ports exposed, allowing the nginx, which acts as a proxy pass to display the website. Multiple replicas of the pods were used when defining yaml files to reduce outage of the application in case of the cloud provider suffering from things such as natural disasters

**Usage Requirements (Abdul)

**Walkthrough (Abdul)

## Testing
---

### Postman Testing

The earliest tests conducted tested the connection between the front end requests and the backend controllers and services. Using an in-memory h2 database and localhost, the basic create, read, update and delete functionality of the Helpqueue app was tested with Postman. Some images from these early-stage GET and POST request tests are shown below.

![postmancreate][postmancreate]

![postmanget][postmanget]

### Backend Testing

Backend testing was carried out using JUnit. Integration tests on the backend controller were conducted using MockMVC which supports Spring MVC. A test MySQL database hosted on AWS RDS, with existing records of tickets to be tested, was used to carry out these tests. Testing the functionality of the service class was done using the testing framework Mockito. Mockito allows for testing without establishing connections through using mock objects which return mock data. JUnit, an in-built test framework for Java applications, was used to run both the integration and unit tests. JUnit produces a report on the status and outcome of each test, detailing which were successful, which had errors, and showing any failure traces in a console.


![backendtests][backendtests]

JUnit also tracks the coverage of the tests to show the percentage of the code in the application which has been tested. The aim for this project was 80% coverage, and in reality 99.6% backend test coverage was achieved as shown below.

![backendcoverage][backendcoverage]

### Frontend Testing

Frontend testing was carried out using the Jest testing framework for JavaScript. This involved a combination of tests such as ensuring that snapshots of components match what is expected, or that props are being passed to child components properly. A console output during frontend testing along with some test coverage is shown below.

![frontendtests][frontendtests]

For this project, 16 out of 24 components were tested with 100% coverage. This means that approximately 67% of the frontend React code was tested successfully.






## Improvements (All)
---

Due to time constraints and growing focus on successful minimum viable product deployment, not all React components were tested in Jest to the desired standard. Currently the coverage of the front end tests is 67%. A future improvement would be to achieve at least 70% coverage as is the industry standard. 


## Acknowledgements (All)
---

## Authors 
---

- Alanzo Davis
- Basia Adamiec
- Abdul Shaker
- Alasdair Hanson
- Reece Elder
- Binx the Cat

![Photo from Alasdair](https://user-images.githubusercontent.com/71394754/102556380-aa4cf200-40c0-11eb-8672-3102f0f10571.jpg)

[backendtests]:https://i.imgur.com/ZuPZr5m.png
[backendcoverage]:https://i.imgur.com/4CI1HcH.png
[frontendtests]:https://i.imgur.com/fqxZ7HG.png
[pipeline]:https://i.imgur.com/h6rVfbI.png
[jenkins]:https://i.imgur.com/BJMtV2Z.png
[postmancreate]:https://i.imgur.com/ckY2s5N.png
[postmanget]:https://i.imgur.com/ZWrbAdB.png




