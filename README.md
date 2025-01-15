# To-Do List Backend (Admin & User)

This repository contains the backend for a To-Do List application, built with Node.js, Express, and TypeScript. The application supports both admin and user roles, providing different functionalities for each role.

## Features

### General Features
- User authentication and authorization (JWT-based).
- RESTful APIs for managing to-do items.
- Role-based access control (Admin & User).
- Input validation using middleware.
- Centralized error handling.
- Structured project architecture for scalability.

### Admin Features
- View all users.
- Manage users (CRUD operations).
- View all to-do items of all users.

### User Features
- Register and log in.
- Create, update, and delete personal to-do items.
- View their own to-do list.

## Tech Stack

- **Backend**: Node.js with Express
- **Language**: TypeScript
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JSON Web Token (JWT)
- **Validation**: Joi or Express-Validator
- **Environment Variables**: Dotenv



## Installation

### Prerequisites
- Node.js (v16 or later)
- MongoDB (local or cloud instance)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-backend.git
   cd todo-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/todo-app
   JWT_SECRET=your_jwt_secret
   ```


## Contribution

1. Fork the repository.
2. Create a new branch for your feature/bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.


---

Feel free to contribute to the project and suggest improvements!

