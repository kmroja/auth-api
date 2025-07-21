#Auth API - JWT Authentication with Node.js, Express & MongoDB

A secure and minimal RESTful authentication API built using Node.js, Express, MongoDB, and JWT. This project includes features like user registration, login, and protected routes.

---

##  Live URL (Render Deployment)

**Backend API Endpoint:**  
https://auth-api-5uo7.onrender.com



##  Project Structure

auth-api/
├── controllers/
│ └── authController.js
├── middleware/
│ └── authMiddleware.js
├── models/
│ └── userModel.js
├── routes/
│ ├── authRoutes.js
│ └── protectedRoute.js
├── .env
├── .gitignore
├── app.js
├── package.json


##  Features

-  Register new users
-  Login with email & password
-  JSON Web Token (JWT) authentication
-  Middleware to protect routes
-  MongoDB integration with Mongoose
-  Environment-based config (.env)
-  CORS enabled for frontend access

Create .env file

PORT=5000
MONGO_URI=your_mongodb_uri_here
JWT_SECRET=your_super_secret_key

Run the app

node app.js

Register

POST /api/auth/register
Content-Type: application/json

{
  "username": "name",
  "email": "name@gmail.com",
  "password": "yourpassword"

Login
POST /api/auth/login
Content-Type: application/json

{
  "email": "name@gmail.com",
  "password": "yourpassword"
}
Response:
{
  "token": "your_jwt_token"
}
