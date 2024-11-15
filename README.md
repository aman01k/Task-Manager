# Server Application

## Overview

This project is a Node.js-based server that provides a RESTful API for user authentication and task management. It utilizes Express.js for routing, Mongoose for database operations, and JWT for authentication. The application supports CRUD operations for users and tasks.

## Features

- User authentication using JWT (JSON Web Token).
- CRUD operations for tasks.
- Error handling middleware for consistent error responses.
- Environment variable support using `dotenv`.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=4001
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   FRONTEND_URL=<your-frontend-url>
   ```
5. Start the server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication

#### 1. Register User
   - Endpoint: `POST /api/v1/user/register`
   - Request Body:
     ```json
     {
       "name": "string",
       "email": "string",
       "password": "string"
     }
     ```
   - Response:
     ```json
     {
       "success": true,
       "message": "User registered successfully"
     }
     ```

#### 2. Login User
   - Endpoint: `POST /api/v1/user/login`
   - Request Body:
     ```json
     {
       "email": "string",
       "password": "string"
     }
     ```
   - Response:
     ```json
     {
       "success": true,
       "token": "string"
     }
     ```

#### 3. Logout User
   - Endpoint: `GET /api/v1/user/logout`
   - Response:
     ```json
     {
       "success": true,
       "message": "Logged out successfully"
     }
     ```

---

### Task Management

#### 1. Create Task
     }
   - Endpoint: `POST /api/v1/task`
   - Request Body:
     ```json
     {
       "title": "string",
     }
       "description": "string"
     ```
   - Response:
     ```json
     {
       "success": true,
       "data": { "task": { /* task object */ } }
     ```

#### 2. Get All Tasks
   - Endpoint: `GET /api/v1/task`
   - Response:
     ```json
     {
       "success": true,
       "data": { "tasks": [/* array of tasks */] }
     }
     ```

#### 3. Update Task
   - Endpoint: `PUT /api/v1/task/:id`
   - Request Body:
     ```json
     {
       "title": "string",
       "description": "string",
       "status": "string"
     }
     ```
   - Response:
     ```json
     {
       "success": true,
       "message": "Task updated successfully"
     }
     ```

#### 4. Delete Task
   - Endpoint: `DELETE /api/v1/task/:id`
   - Response:
     ```json
     {
       "success": true,
       "message": "Task deleted successfully"
     }
     ```

## Middleware

- Error Handling Middleware:
  All API errors are handled uniformly using the `errorMiddleware` function. Ensure consistent error responses.

## Scripts

- `npm start`: Starts the application.
- `npm run dev`: Starts the application in development mode with `nodemon`.

## Technologies Used

- Express.js: Web framework.
- Mongoose: MongoDB object modeling.
- JWT: Authentication.
- dotenv: Environment variable management.

## License

This project is licensed under the ISC License.
