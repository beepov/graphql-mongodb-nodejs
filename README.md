# Node.js MongoDB GraphQL Project

This is a Node.js project that demonstrates the use of MongoDB and GraphQL.

## Table of Contents

- [Node.js MongoDB GraphQL Project](#nodejs-mongodb-graphql-project)
- [Table of Contents](#table-of-contents)
- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)

## Project Overview

This Node.js project showcases the integration of MongoDB, a NoSQL database, and GraphQL, a query language for your API, to create a robust and flexible backend for web applications.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed (node version v18.15.0).
- MongoDB server installed and running.
- Basic understanding of GraphQL concepts.

## Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/devsocheat/graphql-mongodb-nodejs.git && cd graphql-mongodb-nodejs
    ```
2. **Install dependancies**
    ```bash
    npm install
    ```
3. **Create .env file**
    ```bash
    cp .env.example .env
    ```
    Replace with your own mongodb information
    ```
    SERVER_PORT=3000
    MONGODB_DB=graphql-mongodb
    MONGODB_HOST=localhost
    MONGODB_PORT=27017
    MONGODB_USER=socheat
    MONGODB_PWD=SecurePassword
    ```

## Start server
```
npm run start
```
Then application will start successfull with below message:
```
Server is running on port 3000
```