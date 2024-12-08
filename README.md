# ChallengePicpay

This project is a simple Payment Management System built with Angular 18, JSON Server, and Cypress. The goal of this project is to provide an interface for managing payments, including adding, editing, and viewing payment records.

## Features

| Name | Description |
| ------ | ------ |
| Add Payment | Add new payment entries to the system. |
| Edit Payment | Modify existing payment details |
| Delet Payment | Remove payments from the system. |
| View Payments | Display a table of all payments with relevant details |
| Search Payments | Filter payments by user name or title. |


## Technologies Used

Angular 18: Framework for building the front-end user interface.
JSON Server: A fake REST API to simulate backend communication and handle payments data.
Cypress: End-to-end testing framework to test the functionality of the application.
Angular Material: For styling and responsive design.

## Setup Instructions

1. Install Dependencies

Make sure you have Node.js and npm installed. Then install the dependencies:

``npm install``

2. Start JSON Server

This project uses JSON Server as a mock backend. Start the server by running:

``npm run server``

The server will start at http://localhost:3000

3. Run the Angular Application

After starting the JSON server, you can run the Angular application:

``npm start``

4. Running Cypress Tests

To run end-to-end tests with Cypress, use the following command:

``npm run cypress:open``

5. Run Unit Tests

To run unit tests for Angular components, you can use:

``npm run test``
