import mongoose from "mongoose";

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

export default mongoose.models.HomeGallery ||
  mongoose.model(
    "HomeGallery",
    homeGallerySchema
  );