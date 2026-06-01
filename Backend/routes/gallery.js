const express = require("express");
const multer = require("multer");
const path = require("path");

const Gallery = require("../models/Gallery");

const router = express.Router();



const cloudinary =
  require("../config/cloudinary");

const {
  CloudinaryStorage,
} = require("multer-storage-cloudinary");
const storage =
  new CloudinaryStorage({
    cloudinary,

    params: {
      folder: "gurukulam-gallery",

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

// GET ALL ALBUMS

router.get("/", async (req, res) => {
  try {
    const albums = await Gallery.find().sort({
      date: -1,
    });

    res.json(albums);
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});


// CREATE ALBUM


router.post(
  "/",
  upload.fields([
    { name: "cover", maxCount: 1 },
    { name: "images" },
  ]),
  async (req, res) => {

    const cover =
      req.files.cover[0].path;

    const images =
      req.files.images.map(
        (img) => img.path
      );

    const album =
      await Gallery.create({
        title: req.body.title,
        date: req.body.date,
        cover,
        images,
      });

    res.json(album);
  }
);


// ADD MORE PHOTOS TO ALBUM

router.put(
  "/:id/photos",
  upload.array("images", 100),
  async (req, res) => {
    try {
      const album =
        await Gallery.findById(
          req.params.id
        );

      if (!album) {
        return res.status(404).json({
          message: "Album not found",
        });
      }

    const newImages =
  req.files.map(
    (file) => file.path
  );

      album.images.push(...newImages);

      await album.save();

      console.log(
        `➕ ${newImages.length} photos added to album: ${album.title}`
      );

      res.json(album);
    } catch (err) {
      res.status(500).json({
        message: "Server Error",
      });
    }
  }
);


// DELETE ENTIRE ALBUM

router.delete("/:id", async (req, res) => {
  try {
    const album =
      await Gallery.findById(req.params.id);

    if (!album) {
      return res.status(404).json({
        message: "Album not found",
      });
    }

    console.log(
      `🗑️ Album Deleted: ${album.title}`
    );

    await Gallery.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Album deleted successfully",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

// DELETE SINGLE PHOTO

router.delete(
  "/:albumId/photo/:photoName",
  async (req, res) => {

    console.log(
      "DELETE PHOTO:",
      req.params.albumId,
      req.params.photoName
    );

    try {

      const album =
        await Gallery.findById(
          req.params.albumId
        );

      if (!album) {
        return res.status(404).json({
          message: "Album not found",
        });
      }
      console.log(
        `🖼️ Photo Deleted: ${req.params.photoName} from ${album.title}`
      );

      album.images =
        album.images.filter(
          (img) =>
            img !== req.params.photoName
        );

      await album.save();

      res.json({
        message:
          "Photo deleted successfully",
      });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        message: "Server Error",
      });

    }
  }
);

module.exports = router;