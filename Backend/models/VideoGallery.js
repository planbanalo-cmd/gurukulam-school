const mongoose = require("mongoose");

const videoGallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  cover: {
    type: String,
    required: true,
  },

  videos: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model(
  "VideoGallery",
  videoGallerySchema
);