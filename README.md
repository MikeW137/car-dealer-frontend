# car-dealer-frontend

Car dealership project. Link to the website [here!](https://car-dealer10.herokuapp.com/)

### Project

A car dealership page, which visitors can check new and pre-owned vehicles inventory. The backend can be seen [here!](https://github.com/MikeW137/car-dealer-backend/)

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
<img width="1673" alt="Screen Shot 2021-05-20 at 1 54 24 PM" src="https://user-images.githubusercontent.com/49173138/119033513-eb4c7980-b972-11eb-9fa8-ecbcc964aefe.png">
<img width="1663" alt="Screen Shot 2021-05-20 at 1 51 21 PM" src="https://user-images.githubusercontent.com/49173138/119033522-ed163d00-b972-11eb-802b-4536533989db.png">

### ERD Diagram

![Dealership ERD](https://user-images.githubusercontent.com/49173138/118517829-2e051c00-b6fd-11eb-9599-60eedc021bab.jpg)

### Wireframes

- Home Page
<img width="1025" alt="Screen Shot 2021-05-13 at 11 56 47 AM" src="https://user-images.githubusercontent.com/49173138/118161264-fccada00-b3e4-11eb-8ab3-dccf731ba79d.png">

- Inventory Pages
<img width="1028" alt="Screen Shot 2021-05-13 at 12 15 17 PM" src="https://user-images.githubusercontent.com/49173138/118161304-09e7c900-b3e5-11eb-9c17-c69d84b2e529.png">

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
    

### User Stories

Our users are separated in two groups. First, employees, which are manipulating the website database and structure,
adding cars to a database. Second, visitors, which are accesing the website without being able to register, but having
access to multiple website features.

Employee:

- As an employee, I want to be able to login to the application.
- As an employee, I want to be able to add cars to a car inventory
- As an employee, I want to be able to display a picture of the car.

Visitor:

- As a visitor, I want to be able to view a home page with a meaningful content.
- As a visitor, I want to be able to view new/pre-owned car lists.
- As a visitor, I want to be able to filter vehicles by charateristics.
- As a visitor, I want to be able to leave reviews for the dealership
- As a visitor, I want to be able to calculate a potential deal with the specific car interest.
- As a visitor, I want to be able to contact customer service via a chat menu.
- As a visitor, I want to be able to see the location of the dealership.
