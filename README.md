Server Application
Overview
This project is a Node.js-based server that provides a RESTful API for user authentication and task management. It utilizes Express.js for routing, Mongoose for database operations, and JWT for authentication. The application supports CRUD operations for users and tasks.

Features
User authentication using JWT (JSON Web Token).
CRUD operations for tasks.
Error handling middleware for consistent error responses.
Environment variable support using dotenv.
Prerequisites
Ensure you have the following installed:

Node.js (v16 or later)
MongoDB
Installation
Clone the repository:
bash
Copy code
git clone <repository-url>
Navigate to the project directory:
bash
Copy code
cd server
Install dependencies:
bash
Copy code
npm install
Create a .env file in the root directory with the following variables:
env
Copy code
PORT=4001
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
FRONTEND_URL=<your-frontend-url>
Start the server:
bash
Copy code
npm run dev
API Endpoints
Authentication
1. Register User
Endpoint: POST /api/v1/user/register
Request Body:
json
Copy code
{
  "name": "string",
  "email": "string",
  "password": "string"
}
Response:
json
Copy code
{
  "success": true,
  "message": "User registered successfully"
}
2. Login User
Endpoint: POST /api/v1/user/login
Request Body:
json
Copy code
{
  "email": "string",
  "password": "string"
}
Response:
json
Copy code
{
  "success": true,
  "token": "string"
}
3. Logout User
Endpoint: GET /api/v1/user/logout
Response:
json
Copy code
{
  "success": true,
  "message": "Logged out successfully"
}
Task Management
1. Create Task
Endpoint: POST /api/v1/task
Request Body:
json
Copy code
{
  "title": "string",
  "description": "string"
}
Response:
json
Copy code
{
  "success": true,
  "data": { "task": { /* task object */ } }
}
2. Get All Tasks
Endpoint: GET /api/v1/task
Response:
json
Copy code
{
  "success": true,
  "data": { "tasks": [/* array of tasks */] }
}
3. Update Task
Endpoint: PUT /api/v1/task/:id
Request Body:
json
Copy code
{
  "title": "string",
  "description": "string",
  "status": "string"
}
Response:
json
Copy code
{
  "success": true,
  "message": "Task updated successfully"
}
4. Delete Task
Endpoint: DELETE /api/v1/task/:id
Response:
json
Copy code
{
  "success": true,
  "message": "Task deleted successfully"
}
Middleware
Error Handling Middleware: All API errors are handled uniformly using the errorMiddleware function. Ensure consistent error responses.
Scripts
npm start: Starts the application.
npm run dev: Starts the application in development mode with nodemon.
Technologies Used
Express.js: Web framework.
Mongoose: MongoDB object modeling.
JWT: Authentication.
dotenv: Environment variable management.
License
This project is licensed under the ISC License.



Overview
This project is a Node.js-based server that provides a RESTful API for user authentication and task management. It utilizes Express.js for routing, Mongoose for database operations, and JWT for authentication. The application supports CRUD operations for users and tasks.

Features
User authentication using JWT (JSON Web Token).
CRUD operations for tasks.
Error handling middleware for consistent error responses.
Environment variable support using dotenv.
Prerequisites
Ensure you have the following installed:

Node.js (v16 or later)
MongoDB
Installation
Clone the repository:
bash
Copy code
git clone <repository-url>
Navigate to the project directory:
bash
Copy code
cd server
Install dependencies:
bash
Copy code
npm install
Create a .env file in the root directory with the following variables:
env
Copy code
PORT=4001
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
FRONTEND_URL=<your-frontend-url>
Start the server:
bash
Copy code
npm run dev
API Endpoints
Authentication
1. Register User
Endpoint: POST /api/v1/user/register
Request Body:
json
Copy code
{
  "name": "string",
  "email": "string",
  "password": "string"
}
Response:
json
Copy code
{
  "success": true,
  "message": "User registered successfully"
}
2. Login User
Endpoint: POST /api/v1/user/login
Request Body:
json
Copy code
{
  "email": "string",
  "password": "string"
}
Response:
json
Copy code
{
  "success": true,
  "token": "string"
}
3. Logout User
Endpoint: GET /api/v1/user/logout
Response:
json
Copy code
{
  "success": true,
  "message": "Logged out successfully"
}
Task Management
1. Create Task
Endpoint: POST /api/v1/task
Request Body:
json
Copy code
{
  "title": "string",
  "description": "string"
}
Response:
json
Copy code
{
  "success": true,
  "data": { "task": { /* task object */ } }
}
2. Get All Tasks
Endpoint: GET /api/v1/task
Response:
json
Copy code
{
  "success": true,
  "data": { "tasks": [/* array of tasks */] }
}
3. Update Task
Endpoint: PUT /api/v1/task/:id
Request Body:
json
Copy code
{
  "title": "string",
  "description": "string",
  "status": "string"
}
Response:
json
Copy code
{
  "success": true,
  "message": "Task updated successfully"
}
4. Delete Task
Endpoint: DELETE /api/v1/task/:id
Response:
json
Copy code
{
  "success": true,
  "message": "Task deleted successfully"
}
Middleware
Error Handling Middleware: All API errors are handled uniformly using the errorMiddleware function. Ensure consistent error responses.
Scripts
npm start: Starts the application.
npm run dev: Starts the application in development mode with nodemon.
Technologies Used
Express.js: Web framework.
Mongoose: MongoDB object modeling.
JWT: Authentication.
dotenv: Environment variable management.
License
This project is licensed under the ISC License.

