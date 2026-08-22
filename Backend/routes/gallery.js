const express = require("express");
const multer = require("multer");

const Gallery = require("../models/Gallery");

const router = express.Router();

const cloudinary = require("../config/cloudinary");

const {
  CloudinaryStorage,
} = require("multer-storage-cloudinary");


// ======================================================
// CLOUDINARY STORAGE
// ======================================================

const storage = new CloudinaryStorage({
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

const upload = multer({
  storage,
});


// ======================================================
// GET ALL ALBUMS
// ======================================================

router.get("/", async (req, res) => {
  try {

    const albums = await Gallery.find().sort({
      date: -1,
    });

    return res.status(200).json(albums);

  } catch (err) {

    console.error("GET GALLERY ERROR:", err);

    return res.status(500).json({
      message: "Server Error",
    });
  }
});


// ======================================================
// CREATE NEW ALBUM
// ======================================================

router.post(
  "/",
  upload.fields([
    {
      name: "cover",
      maxCount: 1,
    },
    {
      name: "images",
      maxCount: 100,
    },
  ]),

  async (req, res) => {

    try {

      if (!req.files?.cover?.length) {
        return res.status(400).json({
          message: "Cover image is required",
        });
      }

      const cover =
        req.files.cover[0].path;


      const images =
        req.files.images
          ? req.files.images.map(
              (img) => img.path
            )
          : [];


      const album =
        await Gallery.create({
          title: req.body.title,
          date: req.body.date,
          cover,
          images,
        });


      console.log(
        `✅ Album Created: ${album.title}`
      );


      return res.status(201).json(album);

    } catch (err) {

      console.error(
        "CREATE ALBUM ERROR:",
        err
      );

      return res.status(500).json({
        message: "Server Error",
      });
    }
  }
);


// ======================================================
// ADD MORE PHOTOS
// ======================================================

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


      if (!req.files?.length) {
        return res.status(400).json({
          message: "No images uploaded",
        });
      }


      const newImages =
        req.files.map(
          (file) => file.path
        );


      album.images.push(
        ...newImages
      );


      await album.save();


      console.log(
        `➕ ${newImages.length} photos added to: ${album.title}`
      );


      return res.status(200).json(album);

    } catch (err) {

      console.error(
        "ADD PHOTOS ERROR:",
        err
      );

      return res.status(500).json({
        message: "Server Error",
      });
    }
  }
);


// ======================================================
// CHANGE COVER IMAGE
// ======================================================

router.put(
  "/:id/cover",
  upload.single("cover"),

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


      if (!req.file) {
        return res.status(400).json({
          message: "Cover image is required",
        });
      }


      // Cloudinary automatically uploads
      // the image and gives us the URL.

      album.cover =
        req.file.path;


      await album.save();


      console.log(
        `🖼️ Cover updated: ${album.title}`
      );


      return res.status(200).json({
        message:
          "Cover image updated successfully",
        album,
      });

    } catch (err) {

      console.error(
        "CHANGE COVER ERROR:",
        err
      );

      return res.status(500).json({
        message: "Server Error",
      });
    }
  }
);


// ======================================================
// DELETE SINGLE PHOTO
// ======================================================

router.delete(
  "/:albumId/photo/:photoName",

  async (req, res) => {

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


      const photoName =
        decodeURIComponent(
          req.params.photoName
        );


      const oldLength =
        album.images.length;


      album.images =
        album.images.filter(
          (img) => img !== photoName
        );


      if (
        album.images.length ===
        oldLength
      ) {

        return res.status(404).json({
          message: "Photo not found",
        });
      }


      await album.save();


      console.log(
        `🗑️ Photo deleted from: ${album.title}`
      );


      return res.status(200).json({
        message:
          "Photo deleted successfully",
        album,
      });

    } catch (err) {

      console.error(
        "DELETE PHOTO ERROR:",
        err
      );

      return res.status(500).json({
        message: "Server Error",
      });
    }
  }
);


// ======================================================
// DELETE ENTIRE ALBUM
// ======================================================

router.delete(
  "/:id",

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


      console.log(
        `🗑️ Album Deleted: ${album.title}`
      );


      await Gallery.findByIdAndDelete(
        req.params.id
      );


      return res.status(200).json({
        message:
          "Album deleted successfully",
      });

    } catch (err) {

      console.error(
        "DELETE ALBUM ERROR:",
        err
      );

      return res.status(500).json({
        message: "Server Error",
      });
    }
  }
);


module.exports = router;