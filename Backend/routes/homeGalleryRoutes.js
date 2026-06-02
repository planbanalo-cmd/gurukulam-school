const express = require("express");

const router = express.Router();

const HomeGallery =
  require("../models/HomeGallery");

const multer = require("multer");

const cloudinary =
  require("../config/cloudinary");

const {
  CloudinaryStorage,
} = require("multer-storage-cloudinary");

const storage =
  new CloudinaryStorage({
    cloudinary,

    params: {
      folder: "home-gallery",

      allowed_formats: [
        "jpg",
        "jpeg",
        "png",
        "webp",
      ],
    },
  });

const upload =
  multer({ storage });
// GET ALL IMAGES

router.get("/", async (req, res) => {
  try {
    const items = await HomeGallery.find()
      .sort({ createdAt: -1 });

    res.json(items);

  } catch (err) {

    res.status(500).json({
      message: "Failed to fetch gallery"
    });

  }
});


// UPLOAD IMAGE

router.post(
  "/",
  upload.single("image"),
  async (req, res) => {

    try {

      const item =
        await HomeGallery.create({
          title: req.body.title,
          image: req.file.path,
          cloudinaryId: req.file.filename,
        });

      res.json(item);

    } catch (err) {

      console.log(err);

      res.status(500).json({
        message: "Upload failed"
      });

    }

  }
);


// DELETE IMAGE

router.delete("/:id", async (req, res) => {

  try {

    const item =
      await HomeGallery.findById(
        req.params.id
      );

    if (!item) {

      return res.status(404).json({
        message: "Image not found"
      });

    }

    if (item.cloudinaryId) {

      await cloudinary.uploader.destroy(
        item.cloudinaryId
      );

    }

    await item.deleteOne();

    res.json({
      success: true
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Delete failed"
    });

  }

});

module.exports = router;