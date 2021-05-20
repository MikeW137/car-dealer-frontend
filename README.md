### Project

A car dealership page, which visitors can check new and pre-owned vehicles inventory. Link to the website [here!](https://car-dealer10.herokuapp.com/)
The backend can be seen [here!](https://github.com/MikeW137/car-dealer-backend/)
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
<img width="1659" alt="Screen Shot 2021-05-20 at 1 54 11 PM" src="https://user-images.githubusercontent.com/49173138/119033506-ea1b4c80-b972-11eb-8879-db19f24a441d.png">
<img width="1672" alt="Screen Shot 2021-05-20 at 2 54 45 PM" src="https://user-images.githubusercontent.com/49173138/119040833-83e6f780-b97b-11eb-8337-046ca8d08908.png">
<img width="1663" alt="Screen Shot 2021-05-20 at 1 51 21 PM" src="https://user-images.githubusercontent.com/49173138/119033522-ed163d00-b972-11eb-802b-4536533989db.png">
<img width="1673" alt="Screen Shot 2021-05-20 at 1 54 24 PM" src="https://user-images.githubusercontent.com/49173138/119033513-eb4c7980-b972-11eb-9fa8-ecbcc964aefe.png">
<img width="1675" alt="Screen Shot 2021-05-20 at 2 55 13 PM" src="https://user-images.githubusercontent.com/49173138/119040895-92351380-b97b-11eb-9147-a9d65785b367.png">

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
