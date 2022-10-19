# Checkout Action API
## Description
Welcome to the checkout action API! This project contained a single endpoint used to performs checkout action on simplified e-commerce transaction as well as their setup and support scripts. List of watches are taken as an input and the endpoint return the total cost, dubbed as price.

The project was done with Node.js, Express, Sequalize (PostgreSQL), and Jest. Node.js is a single-threaded, open-source, cross-platform runtime environment. Due to its single-threaded nature, it allows user to build faster and more scalable server-side and networking applications, especially in less data-intensive task. However, Node.js is a low-level I/O mechanism which has an HTTP module, and if used alone, a lot of work like parsing the payload, cookies, storing sessions, selecting the right route pattern based on regular expressions will have to be re-implemented. To avoid this repetitiveness, Express is utilized on top of the Node.js built-in http module. Express assist in setting up routing and handle the request/response cycle.
For easier movement, Sequelize was the chosen Object-relational mapping (ORM) mechanism, which makes it possible to address, access and manipulate objects without having to consider how those objects relate to their data sources, thus allowing the functions to be strongly typed in Typescript or written in Javascript. Assuming the e-commerce  that might grow to enterprise scope, with complex queries and frequent write operations, PostgreSQL is used. To test each units and the integration of the API, Jest is utilized, which in turn allows isolated testing, and in the future can also be used to test the frontend (most likely be based on React).

The project is deployed on Github and can be accessed through [this link](https://github.com/lemonadeaumiel/checkoutAction). **.env file is not included.**


## Further Development
Further developments on the CI/CD pipeline will need to be made, especially to automate the build and notify the reviewer in team setting. The database is populated using seeds beforehand in this version, but in the future development, a combined method with CRUD would also be beneficial, especially for CMS use. The ID is currently auto-incremented (starting from 1) as it allows for faster speed when performing queries and data-independence when searching through thousands of records which might contain frequently altered data elsewhere in the table, but if the (00*) is deemed necessary for other reasons, custom id can be generated in the future, however it may affect the efficiency.


## Environment var(s)
This project uses the following environment variable(s):

| Name      | Description         | Default Value|
| ---------:|:-------------------:| ------------:|
| CORS      | Cors accepted value | "*"          |


## Pre-requisites
Node.js is required to run this project. Please refer to the official documentation to (install Node.js)[https://nodejs.org/en/download/] on your machine.
The minimum version of Node.js required is 13.0.0.


## Installation
1. Clone the repository
```
$ git clone https://github.com/lemonadeaumiel/checkoutAction
```
2. Install the dependencies
```
$ npm install
```
3. Run the project
```
npm run dev
```
Navigate to http://localhost:8080/ to see the project running.


## Project structure
This project used Model-View-Controller (MVC) as the architectural pattern, separating an application into three main logical components: the model, the view, and the controller. Each of these components are built to handle specific development aspects of an application.

#### **Model(s)**
The Model(s) component corresponds to all the data-related logic that the user works with. This can represent either the data that is being transferred between the View and Controller components or any other business logic-related data
#### **View**
The View component is used for all the client/ UI logic of the application. This is the layer that is responsible for all the visual elements of the application, going from rendering the data to the layout, styling, and templates used.
#### **Controller(s)**
The Controller(s) component is used for all the logic and operations that are applied to the data coming from the Model or the View components. This is the layer that is responsible for the application’s overall behavior, and it controls the data flow into the model and updates the view whenever data changes.

## The folder in this project is structured as follows:

| Name          |Description                                                                                                           |
| ------------- |:---------------------------------------------------------------------------------------------------------------------|
| __tests__     | Contains the file to run unit and integration test                                                                   |
| node_modules  | Contains all npm dependencies                                                                                        |
| config        | Application configuration including environment-specific configs                                                     |
| controllers   | Contains the controller for the endpoint, define functions that serve various express routes.                        |
| dal           | Interact with Business Logic Layer (BLL) and the storage layer. Provides access to data stored in persistent storage.|
| migrations    | Contains the migration files for the database                                                                        |
| models        | Contains the model files that define schemas, used in storing and retrieving data from the database                  |
| routes        | Contains the express route files for the endpoint, separated by module/area of application                           |
| seeders       | Contains the seed logic files for the database                                                                       |
| utils         | Utility files containing utility functions that are used across multiple components.                                 |
| views         | Contains the view files for the endpoint, rendering the data for user view                                           |
| db.js         | Contains the database connection config                                                                              |
| index.js      | Entry point to the application                                                                                       |
| package.json  | Contains npm dependencies as well as various utility commands                                                        |
| .npmrc        | Contains the npm registry config when running a command                                                              |

### API Document endpoints
swagger Spec Endpoint : http://localhost:8001/api-docs

### Seeding
* To seed the database, run the following command:
```
$ npm run test:db:seed
```
* To undo the seeding, run the following command:
```
$ npm run test:db:undo
```
* To reset the seed, run the following command:
```
$ npm run test:db:reset
```
* To reset the seed, migrate, and re-seed, run the following command:
```
$ npm run test:db:reset:seed
```

### Testing
The test is written and asserted in Jest. To run the test, run the following command:
* Test coverage
```
$ npm run test:coverage
```
* Run the overall test
```
$ npm run test
```
* Run the test for **only** the *integration test*
```
$ npm run test:integration
```
* Run the test for **only** the *unit test*
```
$ npm run test:unit
```




