const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test API
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "AGRI server is working 🌱",
  });
});

// Auth routes
app.use("/api/auth", authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`AGRI server running on http://localhost:${PORT}`);
});