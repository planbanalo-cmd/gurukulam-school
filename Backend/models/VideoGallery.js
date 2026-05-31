const mongoose = require("mongoose");

const VideoGallerySchema =
  new mongoose.Schema({
    title: String,

    description: String,

    cover: String,

    date: {
      type: Date,
      default: Date.now,
    },

    videos: [String],
  });

module.exports = mongoose.model(
  "VideoGallery",
  VideoGallerySchema
);