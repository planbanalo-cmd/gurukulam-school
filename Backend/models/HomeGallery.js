const mongoose = require("mongoose");

const homeGallerySchema =
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      cloudinaryId: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "HomeGallery",
    homeGallerySchema
  );