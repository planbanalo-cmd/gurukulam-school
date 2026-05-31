require("dotenv").config();
const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const newsletterRoutes = require("./routes/newsletter");
const path = require("path");
const circularRoutes = require("./routes/circular");
const app = express();
const galleryRoutes =require("./routes/gallery");


if (
  !fs.existsSync("uploads/gallery")
) {
  fs.mkdirSync(
    "uploads/gallery",
    { recursive: true }
  );
}
// Routes
const authRoutes = require("./routes/auth");
const noticeRoutes = require("./routes/notice");

// Middleware
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://gurukulam.planbanalo.in"
  ]
}));
app.use(express.json());

// Route middleware
app.use("/api/auth", authRoutes);
app.use("/api/notices", noticeRoutes);
app.use("/api/newsletters", newsletterRoutes);
app.use("/api/circulars",circularRoutes);
app.use(express.json({
  limit: "50mb",
}));
app.use(
  "/api/video-gallery",
  require(
    "./routes/videoGallery"
  )
);

app.use(express.urlencoded({
  extended: true,
  limit: "50mb",
}));
app.use(
  "/api/gallery",
  galleryRoutes
);

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
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