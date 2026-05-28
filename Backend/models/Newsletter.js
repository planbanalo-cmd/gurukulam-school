const mongoose = require("mongoose");

const newsletterSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    pdf: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },

    downloads: {
      type: Number,
      default: 0,
    },
  coverImage: {
  type: String,
  default: "",
},
  },
  {
    timestamps: true,
  }

);

module.exports = mongoose.model(
  "Newsletter",
  newsletterSchema
);