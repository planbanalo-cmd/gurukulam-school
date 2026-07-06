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
const videoGalleryRoutes =require("./routes/videoGallery");
const homeGalleryRoutes = require("./routes/homeGalleryRoutes");
const studentAchievementRoutes =require("./routes/studentAchievement");

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads", {
    recursive: true,
  });
}

if (!fs.existsSync("uploads/gallery")) {
  fs.mkdirSync("uploads/gallery", {
    recursive: true,
  });
}

if (!fs.existsSync("uploads/videos")) {
  fs.mkdirSync("uploads/videos", {
    recursive: true,
  });
}
// Routes
const authRoutes = require("./routes/auth");


// Middleware
app.use(cors({
  origin: [
     "https://www.gurukulamtheschool.com",
    "https://gurukulamtheschool.com"
  ]
}));
app.use(express.json());

// Route middleware
app.use("/api/auth", authRoutes);

app.use("/api/newsletters", newsletterRoutes);
app.use("/api/circulars",circularRoutes);
app.use(express.json({limit: "50mb",}));
app.use("/api/video-gallery",require("./routes/videoGallery"));
app.use("/api/home-gallery",homeGalleryRoutes);
app.use(express.urlencoded({extended: true,limit: "50mb",}));
app.use("/api/gallery",galleryRoutes)
app.use("/api/student-achievements",studentAchievementRoutes);;

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