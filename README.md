Auth API – JWT Authentication with Node.js, Express & MongoDB
A secure and minimal RESTful authentication API built using Node.js, Express, MongoDB, and JWT. This project provides essential features such as user registration, login, and protected routes using JWT-based authentication.
Live URL (Render Deployment)
Backend API Endpoint:
https://auth-api-5uo7.onrender.com
Features
 Register new users

 Login with email & password

 JSON Web Token (JWT) authentication

 Middleware to protect routes

 MongoDB integration with Mongoose

 Environment-based configuration using .env

 CORS enabled for frontend access

Create a .env file
Add your MongoDB URI and secret key:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key

API Endpoints
1. Register a User : POST /api/auth/register
Request Body:

{
  "username": "name",
  "email": "name@example.com",
  "password": "yourpassword"
}
2. Login a User : POST /api/auth/login
Request Body:

{
  "email": "name@example.com",
  "password": "yourpassword"
}
3. Access Protected Route : GET /api/protected
Headers:
Authorization: Bearer your_jwt_token
Response:
{
  "message": "Protected route accessed successfully",
  "user": {
    "id": "user_id_here",
    "iat": timestamp,
    "exp": timestamp
  }
}
Technologies Used

Node.js
Express.js
MongoDB + Mongoose
JWT (jsonwebtoken)
dotenv
CORS
