const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const protectedRoute = require("./routes/protectedRoute");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json()); 


app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoute);


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
  });
