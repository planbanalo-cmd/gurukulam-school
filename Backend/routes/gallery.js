const express = require("express");
const multer = require("multer");

const Gallery = require("../models/Gallery");

const router = express.Router();

const cloudinary = require("../config/cloudinary");

const {
  CloudinaryStorage,
} = require("multer-storage-cloudinary");

// =====================================================
// CLOUDINARY STORAGE
// =====================================================

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

// =====================================================
// GET ALL ALBUMS
// =====================================================

router.get("/", async (req, res) => {
  try {
    const albums = await Gallery.find().sort({
      date: -1,
    });

    res.json(albums);
  } catch (err) {
    console.error("GET GALLERY ERROR:", err);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

// =====================================================
// CREATE ALBUM
// =====================================================

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
      if (
        !req.files ||
        !req.files.cover ||
        !req.files.cover[0]
      ) {
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

      res.status(201).json(album);
    } catch (err) {
      console.error(
        "CREATE ALBUM ERROR:",
        err
      );

      res.status(500).json({
        message: "Server Error",
      });
    }
  }
);

// =====================================================
// ADD MORE PHOTOS TO ALBUM
// =====================================================

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

      if (
        !req.files ||
        req.files.length === 0
      ) {
        return res.status(400).json({
          message: "No photos uploaded",
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
        `➕ ${newImages.length} photos added to album: ${album.title}`
      );

      res.json(album);
    } catch (err) {
      console.error(
        "ADD PHOTOS ERROR:",
        err
      );

      res.status(500).json({
        message: "Server Error",
      });
    }
  }
);

// =====================================================
// CHANGE ALBUM COVER
// =====================================================
//
// IMPORTANT:
//
// This endpoint does NOT upload another image.
//
// It receives an existing image URL from album.images
// and simply changes album.cover to that URL.
//
// Frontend sends:
//
// {
//   imageUrl: "https://res.cloudinary.com/..."
// }
//
// =====================================================

router.put(
  "/:id/cover",
  async (req, res) => {
    try {
      const {
        imageUrl,
      } = req.body;

      console.log(
        "CHANGE COVER REQUEST"
      );

      console.log(
        "Album ID:",
        req.params.id
      );

      console.log(
        "Image URL:",
        imageUrl
      );

      if (!imageUrl) {
        return res.status(400).json({
          message:
            "Cover image is required",
        });
      }

      const album =
        await Gallery.findById(
          req.params.id
        );

      if (!album) {
        return res.status(404).json({
          message:
            "Album not found",
        });
      }

      // Make sure the selected image
      // actually belongs to this album.
      const imageExists =
        album.images.includes(
          imageUrl
        );

      if (!imageExists) {
        return res.status(400).json({
          message:
            "Selected image does not belong to this album",
        });
      }

      // Change cover
      album.cover = imageUrl;

      await album.save();

      console.log(
        `⭐ Cover changed for album: ${album.title}`
      );

      res.json({
        message:
          "Cover image changed successfully",
        album,
      });
    } catch (err) {
      console.error(
        "CHANGE COVER ERROR:",
        err
      );

      res.status(500).json({
        message: "Server Error",
      });
    }
  }
);

// =====================================================
// DELETE SINGLE PHOTO
// =====================================================

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
          message:
            "Album not found",
        });
      }

      const photoName =
        req.params.photoName;

      // Don't allow deleting
      // the current cover.
      if (
        album.cover ===
        photoName
      ) {
        return res.status(400).json({
          message:
            "You cannot delete the current cover. Please select another cover first.",
        });
      }

      const photoExists =
        album.images.includes(
          photoName
        );

      if (!photoExists) {
        return res.status(404).json({
          message:
            "Photo not found in album",
        });
      }

      album.images =
        album.images.filter(
          (img) =>
            img !== photoName
        );

      await album.save();

      console.log(
        `🗑️ Photo deleted from album: ${album.title}`
      );

      res.json({
        message:
          "Photo deleted successfully",
        album,
      });
    } catch (err) {
      console.error(
        "DELETE PHOTO ERROR:",
        err
      );

      res.status(500).json({
        message: "Server Error",
      });
    }
  }
);

// =====================================================
// DELETE ENTIRE ALBUM
// =====================================================

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
          message:
            "Album not found",
        });
      }

      console.log(
        `🗑️ Album Deleted: ${album.title}`
      );

      await Gallery.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "Album deleted successfully",
      });
    } catch (err) {
      console.error(
        "DELETE ALBUM ERROR:",
        err
      );

      res.status(500).json({
        message: "Server Error",
      });
    }
  }
);

module.exports = router;