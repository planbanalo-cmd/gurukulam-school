const express = require("express");
const multer = require("multer");
const cloudinary = require("../config/cloudinary");
const VideoGallery = require("../models/VideoGallery");
const streamifier = require("streamifier");
const router = express.Router();
const extractPublicId = (url) => {
  const filename =
    url.split("/").pop();

  return filename.substring(
    0,
    filename.lastIndexOf(".")
  );
};

const storage =
  multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize:
      500 * 1024 * 1024, // 500MB
  },
});



const uploadToCloudinary = (
  buffer,
  folder,
  resourceType = "auto"
) => {
  return new Promise(
    (resolve, reject) => {

      const stream =
        cloudinary.uploader.upload_stream(
          {
            folder,
            resource_type:
              resourceType,
          },
          (error, result) => {

            if (error)
              reject(error);

            else
              resolve(result);
          }
        );

      streamifier.createReadStream(
        buffer
      ).pipe(stream);
    }
  );
};

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
    },
  ]),
  async (req, res) => {
    try {

      const coverUpload =
        await uploadToCloudinary(
          req.files.cover[0]
            .buffer,
          "gurukulam-video-covers",
          "image"
        );

      const videoUrls =
        await Promise.all(
          req.files.videos.map(
            async (video) => {

              const uploaded =
                await uploadToCloudinary(
                  video.buffer,
                  "gurukulam-videos",
                  "video"
                );

              return uploaded.secure_url;
            }
          )
        );

      const album =
        await VideoGallery.create({
          title:
            req.body.title,
          description:
            req.body.description,
          date:
            req.body.date,
          cover:
            coverUpload.secure_url,
          videos:
            videoUrls,
        });

      res.json(album);

    } catch (err) {

      console.error(err);

      res.status(500).json({
        message:
          err.message,
      });

    }
  }
);
// ========================
// ADD VIDEOS TO ALBUM
// ========================
router.put(
  "/:id/videos",
  upload.array("videos", 100),
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

      const uploadedVideos =
        await Promise.all(
          req.files.map(
            async (video) => {

              const result =
                await uploadToCloudinary(
                  video.buffer,
                  "gurukulam-videos",
                  "video"
                );

              return result.secure_url;
            }
          )
        );

      album.videos.push(
        ...uploadedVideos
      );

      await album.save();

      res.json(album);

    } catch (err) {

      console.error(err);

      res.status(500).json({
        message:
          err.message,
      });

    }
  }
);

// ========================
// DELETE SINGLE VIDEO
// ========================
router.delete(
  "/:albumId/video/:videoUrl",
  async (req, res) => {
    try {

      const album =
        await VideoGallery.findById(
          req.params.albumId
        );

      if (!album) {
        return res.status(404).json({
          message: "Album not found",
        });
      }

      const index =
        Number(req.params.index);

      const videoUrl =
        album.videos[index];

      if (!videoUrl) {
        return res.status(404).json({
          message: "Video not found",
        });
      }

      const videoId =
        extractPublicId(videoUrl);

      await cloudinary.uploader.destroy(
        `gurukulam-videos/${videoId}`,
        {
          resource_type: "video",
        }
      );

      const videoUrl =
  decodeURIComponent(
    req.params.videoUrl
  );

const videoId =
  extractPublicId(videoUrl);

await cloudinary.uploader.destroy(
  `gurukulam-videos/${videoId}`,
  {
    resource_type: "video",
  }
);

album.videos =
  album.videos.filter(
    (v) => v !== videoUrl
  );

      await album.save();

      res.json({
        message: "Video deleted",
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
router.delete("/:id", async (req, res) => {
  try {

    const album = await VideoGallery.findById(
      req.params.id
    );

    if (!album) {
      return res.status(404).json({
        message: "Album not found",
      });
    }

    // Delete cover image
    if (album.cover) {

      const coverId =
        extractPublicId(album.cover);

      await cloudinary.uploader.destroy(
        `gurukulam-video-covers/${coverId}`
      );
    }

    // Delete videos
    for (const video of album.videos) {

      const videoId =
        extractPublicId(video);

      await cloudinary.uploader.destroy(
        `gurukulam-videos/${videoId}`,
        {
          resource_type: "video",
        }
      );
    }

    await VideoGallery.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Album deleted",
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: err.message,
    });

  }
});

module.exports = router;