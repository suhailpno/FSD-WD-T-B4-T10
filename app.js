const express = require("express");
const app = express();
const connectDB = require("./config/db");
const recipeRoutes = require("./routes/recipeRoutes");
require("dotenv").config();


// Middleware
app.use(express.json()); // Parse incoming JSON

// Database connection
connectDB();

// Routes
app.use("/", recipeRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
