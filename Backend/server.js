require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Routes
const authRoutes = require("./routes/auth");
const noticeRoutes = require("./routes/notice");

// Middleware
app.use(cors());
app.use(express.json());

// Route middleware
app.use("/api/auth", authRoutes);
app.use("/api/notices", noticeRoutes);

// Connect DB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log("MongoDB Error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Gurukulam Backend Running 🚀");
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});