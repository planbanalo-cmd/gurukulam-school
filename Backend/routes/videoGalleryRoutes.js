const express = require("express");
const multer = require("multer");
const path = require("path");

const VideoGallery = require(
  "../models/VideoGallery"
);

const router = express.Router();

const storage =
  multer.diskStorage({
    destination: function (
      req,
      file,
      cb
    ) {
      cb(null, "uploads/videos/");
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
});
router.get("/", async (req, res) => {
  try {
    const albums =
      await VideoGallery.find().sort({
        date: -1,
      });

    res.json(albums);
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

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
          (file) => file.filename
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
      res.status(500).json({
        message: "Server Error",
      });
    }
  }
);

router.put(
  "/:id/videos",
  upload.array("videos", 100),
  async (req, res) => {
    try {
      const album =
        await VideoGallery.findById(
          req.params.id
        );

      if (!album)
        return res
          .status(404)
          .json({
            message:
              "Album not found",
          });

      const newVideos =
        req.files.map(
          (file) => file.filename
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
      res.status(500).json({
        message: "Server Error",
      });
    }
  }
);

router.delete(
  "/:albumId/video/:videoName",
  async (req, res) => {
    try {
      const album =
        await VideoGallery.findById(
          req.params.albumId
        );

      if (!album)
        return res
          .status(404)
          .json({
            message:
              "Album not found",
          });

      album.videos =
        album.videos.filter(
          (video) =>
            video !==
            req.params.videoName
        );

      await album.save();

      console.log(
        `🗑️ Video Deleted`
      );

      res.json({
        message:
          "Video deleted",
      });
    } catch (err) {
      res.status(500).json({
        message: "Server Error",
      });
    }
  }
);

router.delete(
  "/:id",
  async (req, res) => {
    try {
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
      res.status(500).json({
        message: "Server Error",
      });
    }
  }
);

module.exports = router;