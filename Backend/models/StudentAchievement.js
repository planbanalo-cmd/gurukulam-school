const mongoose = require("mongoose");

const studentAchievementSchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },

      achievement: {
        type: String,
        required: true,
      },

      badge: {
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
    "StudentAchievement",
    studentAchievementSchema
  );