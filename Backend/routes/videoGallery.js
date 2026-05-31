const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const VideoGallery = require("../models/VideoGallery");

const router = express.Router();

// Create upload folder if it doesn't exist
const uploadDir = path.join(
  __dirname,
  "../uploads/videos"
);

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, {
    recursive: true,
  });
}

// Multer Storage
const storage = multer.diskStorage({
  destination: function (
    req,
    file,
    cb
  ) {
    cb(null, uploadDir);
  },

  filename: function (
    req,
    file,
    cb
  ) {
    cb(
      null,
      Date.now() +
        "-" +
        Math.round(
          Math.random() * 1e9
        ) +
        path.extname(
          file.originalname
        )
    );
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize:
      500 * 1024 * 1024, // 500MB
  },
});

// ========================
// GET ALL ALBUMS
// ========================
router.get(
  "/",
  async (req, res) => {
    try {
      const albums =
        await VideoGallery.find().sort({
          date: -1,
        });

      res.json(albums);

    } catch (err) {

      console.error(err);

      res.status(500).json({
        message: err.message,
      });
    }
  }
);

// ========================
// CREATE VIDEO ALBUM
// ========================
router.post(
  "/",
  upload.fields([
    {
      name: "cover",
      maxCount: 1,
    },
    {
      name: "videos",
      maxCount: 100,
    },
  ]),
  async (req, res) => {
    try {

      console.log(
        "BODY:",
        req.body
      );

      console.log(
        "FILES:",
        req.files
      );

      const {
        title,
        description,
        date,
      } = req.body;

      const cover =
        req.files?.cover?.[0]
          ?.filename || "";

      const videos =
        req.files?.videos?.map(
          (file) =>
            file.filename
        ) || [];

      const album =
        await VideoGallery.create({
          title,
          description,
          date,
          cover,
          videos,
        });

      console.log(
        `🎥 Video Album Created: ${title}`
      );

      res.json(album);

    } catch (err) {

      console.error(
        "VIDEO UPLOAD ERROR:"
      );

      console.error(err);

      res.status(500).json({
        message: err.message,
      });
    }
  }
);

// ========================
// ADD VIDEOS TO ALBUM
// ========================
router.put(
  "/:id/videos",
  upload.array(
    "videos",
    100
  ),
  async (req, res) => {
    try {

      const album =
        await VideoGallery.findById(
          req.params.id
        );

      if (!album) {
        return res
          .status(404)
          .json({
            message:
              "Album not found",
          });
      }

      const newVideos =
        req.files.map(
          (file) =>
            file.filename
        );

      album.videos.push(
        ...newVideos
      );

      await album.save();

      console.log(
        `➕ ${newVideos.length} videos added`
      );

      res.json(album);

    } catch (err) {

      console.error(err);

      res.status(500).json({
        message: err.message,
      });
    }
  }
);

// ========================
// DELETE SINGLE VIDEO
// ========================
router.delete(
  "/:albumId/video/:videoName",
  async (req, res) => {
    try {

      const album =
        await VideoGallery.findById(
          req.params.albumId
        );

      if (!album) {
        return res
          .status(404)
          .json({
            message:
              "Album not found",
          });
      }

      album.videos =
        album.videos.filter(
          (video) =>
            video !==
            req.params.videoName
        );

      await album.save();

      // Delete physical file
      const videoPath =
        path.join(
          uploadDir,
          req.params.videoName
        );

      if (
        fs.existsSync(
          videoPath
        )
      ) {
        fs.unlinkSync(
          videoPath
        );
      }

      res.json({
        message:
          "Video deleted",
      });

    } catch (err) {

      console.error(err);

      res.status(500).json({
        message: err.message,
      });
    }
  }
);

// ========================
// DELETE ENTIRE ALBUM
// ========================
router.delete(
  "/:id",
  async (req, res) => {
    try {

      const album =
        await VideoGallery.findById(
          req.params.id
        );

      if (!album) {
        return res
          .status(404)
          .json({
            message:
              "Album not found",
          });
      }

      // Delete cover
      if (
        album.cover
      ) {
        const coverPath =
          path.join(
            uploadDir,
            album.cover
          );

        if (
          fs.existsSync(
            coverPath
          )
        ) {
          fs.unlinkSync(
            coverPath
          );
        }
      }

      // Delete videos
      for (const video of album.videos) {

        const videoPath =
          path.join(
            uploadDir,
            video
          );

        if (
          fs.existsSync(
            videoPath
          )
        ) {
          fs.unlinkSync(
            videoPath
          );
        }
      }

      await VideoGallery.findByIdAndDelete(
        req.params.id
      );

      console.log(
        "🗑️ Video Album Deleted"
      );

      res.json({
        message:
          "Album deleted",
      });

    } catch (err) {

      console.error(err);

      res.status(500).json({
        message: err.message,
      });
    }
  }
);

module.exports = router;