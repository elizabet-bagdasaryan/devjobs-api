# Devjob Api

## Introduction

This application serves as the backend API that handles requests for job information to be displayed on the frontend. The main functionality of this application is to respond to GET requests made to the endpoint `/jobs/:size/:page` and provide a specific amount of job information based on the requested size and page number.

## API Endpoint

The API endpoint for retrieving job information is as follows:

GET /jobs/:size/:page

- `:size`: Represents the number of jobs to be displayed on the frontend per page.
- `:page`: Represents the page number for which the job information should be retrieved.

## How it Works

When a GET request is made to the specified endpoint with the appropriate parameters, the backend application will process the request and respond with a specific amount of job information in JSON format. The number of jobs and the page number are taken into account to determine which set of job data should be returned.

For example, a request like `/jobs/6/2` will return the job information for the second page, with 6 jobs displayed per page.

## Getting Started

To run the backend application locally or deploy it to a server, follow these steps:

1. Ensure you have Node.js and npm (Node Package Manager) installed on your machine.
2. Clone this repository to your local system.
3. Install the required dependencies by running the command:
npm install
4.Make sure you have MongoDB installed and running on your machine or provide the appropriate MongoDB connection URI in the application configuration.

Start the backend application by running the command:

bash
Copy code
npm start
The server should now be up and running, ready to handle incoming requests.


## Dependencies

The backend application has the following dependencies:

- Node.js: A JavaScript runtime that allows executing server-side JavaScript.
- Express: A web framework for Node.js that handles HTTP requests and responses.
- MongoDB: A NoSQL database used to store job information.
- 
Make sure to install these dependencies before running the application.


## Contributions

Contributions to the Devjob Api Backend are welcome! If you have any suggestions, bug reports, or feature requests, please feel free to open an issue or submit a pull request. Make sure to follow the existing coding style and guidelines.

## Contact

If you have any questions or need further assistance, please contact [elizabet.bagdasaryan1@gmail.com]


