const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        date: {
            type: Date,
            required: true,
        },

        cover: {
            type: String,
            required: true,
        },

        images: [
            {
                type: String,
            },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model(
    "Gallery",
    gallerySchema
);