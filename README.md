# EmployeeApp

This is a simple web application for managing employees. Created with Spring-Boot (2.4.4) & Angular (11.2.7).

## Build and run the application

Before you can build this project, you must install and configure the following dependencies on your machine:

.1. Install a Node version > 10

.2. Install Java 8

.3. Install MySQL

.4. Create an empty database with name: 'EmployeeApp'. No need to create tables, the application automatically creates the
tables at first run (uses Liquibase).

```
CREATE SCHEMA `EmployeeApp` DEFAULT CHARACTER SET utf8;
```

.5. Clone the project

.6. Configure 'employee-app/src/main/resources/config/application-dev.yml' with your root mysql password. Property: [spring.datasource.password]

.7. Run

```
npm install
```

.8. Run the back-end with 'dev' profile

.9. Run the front-end with

```
npm start
```
