### Project

A car dealership page, which visitors can check new and pre-owned vehicles inventory. Link to the website [here!](https://car-dealer10.herokuapp.com/)
The backend can be seen [here!](https://github.com/MikeW137/car-dealer-backend/)

### General Approach

We have four SQL Tables for the inventory/cars/images/users. Our approach was to allow annonomoys users to browse the inventory and make GET calls to the API, but not being able to POST, PUT or DELETE. Those operations are only allowed for our admin users, which are populating the database. In the backend, we split our code into business logic in the Service package and front-end mapping in the Controller package. We also created custom error messages contained within the Exception package, which are handling those cases. Our Repository package is using predefined methods from JPARepository interface, alongside some custom ones. 

### General Approach

We have four SQL Tables for the inventory/cars/images/users. Our approach was to allow annonomoys users to browse the inventory and make GET calls to the API, but not being able to POST, PUT or DELETE. Those operations are only allowed for our admin users, which are populating the database. In the backend, we split our code into business logic in the Service package and front-end mapping in the Controller package. We also created custom error messages contained within the Exception package, which are handling those cases. Our Repository package is using predefined methods from JPARepository interface, alongside some custom ones. 

### Features
- Bootstrap carousel for advertisement/home page information
- Chat bot, with pre-determined responses using Dialogflow ES (Google Cloud)
- Google maps integration for the dealership address (Has a placeholder address of Bob Rohrman's Schaumburg Ford)
- Cars/Inventory/Single Car pages with API filter calls to our database.
- API testing with J-Unit and Mock MVC
- JSON Web Token Security

### Screenshots

We used some assets from car dealership websites in the Chicago area, such as https://www.patrickhyundai.com/ and https://www.carvana.com/ in order to re-create the feeling of a car dealership.

<img width="1662" alt="Screen Shot 2021-05-21 at 10 19 44 AM" src="https://user-images.githubusercontent.com/49173138/119160867-5010de00-ba1e-11eb-99d7-3df662bb6174.png">
<img width="1667" alt="Screen Shot 2021-05-21 at 10 19 56 AM" src="https://user-images.githubusercontent.com/49173138/119160913-599a4600-ba1e-11eb-8da0-715ac4920e9a.png">
<img width="1672" alt="Screen Shot 2021-05-20 at 2 54 45 PM" src="https://user-images.githubusercontent.com/49173138/119040833-83e6f780-b97b-11eb-8337-046ca8d08908.png">
<img width="1671" alt="Screen Shot 2021-05-21 at 10 20 20 AM" src="https://user-images.githubusercontent.com/49173138/119160990-70d93380-ba1e-11eb-8240-125459c2c421.png">
<img width="1672" alt="Screen Shot 2021-05-21 at 10 20 51 AM" src="https://user-images.githubusercontent.com/49173138/119161032-7afb3200-ba1e-11eb-81f8-114294cf4fa3.png">


### ERD Diagram

![Dealership ERD](https://user-images.githubusercontent.com/49173138/118517829-2e051c00-b6fd-11eb-9599-60eedc021bab.jpg)

### Endpoints
| Endpoint | Functionality | Access |
|---|----| --- |
| GET /api/cars | Get All Car Makes | PUBLIC |
| GET /api/cars/1 | Get Individual Car Make | PUBLIC |
| GET /api/inventory | Get Make Inventory | PUBLIC |
| GET /api/inventory/1 | Get Specific Make Cars | PUBLIC |
| GET /api/inventory/search/1 | Get Specific Car | PUBLIC |
| POST /api/inventory/1 | Creating Single Car | PRIVATE |
| PUT /api/inventory/1 | Updating Single Car | PRIVATE |
| DELETE /api/inventory/1 | Delete Single Car | PRIVATE |
| POST /api/cars | Create Car Make | PRIVATE |
| PUT /api/cars/1 | Update Car Make | PRIVATE |
| DELETE /api/cars/1 | Delete Car Make | PRIVATE |
| POST api/inventory/1/images | Create Inventory Image | PRIVATE |
| DELETE api/images/1 | Delete Inventory Image | PRIVATE |


### Machineries used

- Angular 11
- Spring Boot Framework
- IntelliJ IDEA/Java 11
- Tomcat Server
- Apache Maven
- Dev Profile
- Postman
- Postgresql
- pgAdmin 4
- Bootstrap
- Animate.css Library
- Heroku
- Kommunicate.io Bot
- Dialogflow ES (Google Cloud)
- Pivotal Tracker

### Descriptions of any unsolved problems or major hurdles
We had hurdles during our efforts to implement the API filtering for the cars. Another obstacle we had, is when we were trying to deploy our API to Heroku, where
we experienced issues with the JWT variable.
    
