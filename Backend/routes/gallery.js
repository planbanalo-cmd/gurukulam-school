const express = require("express");
const multer = require("multer");
const path = require("path");

const Gallery = require("../models/Gallery");

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/gallery/");
    },

    filename: function (req, file, cb) {
        cb(
            null,
            Date.now() +
            "-" +
            Math.round(Math.random() * 1e9) +
            path.extname(file.originalname)
        );
    },
});

const upload = multer({
    storage,
});


// GET ALL ALBUMS

router.get("/", async (req, res) => {
    try {
        const albums = await Gallery.find().sort({
            createdAt: -1,
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
            const { title, date } = req.body;

            const cover =
                req.files?.cover?.[0]?.filename || "";

            const images =
                req.files?.images?.map(
                    (file) => file.filename
                ) || [];
            const album =
                await Gallery.create({
                    title,
                    date,
                    cover,
                    images,
                });

            res.json(album);
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Server Error",
            });
        }
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
                    (file) => file.filename
                );

            album.images.push(...newImages);

            await album.save();

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
      await Gallery.findById(
        req.params.id
      );

    if (!album) {
      return res.status(404).json({
        message: "Album not found",
      });
    }

    if (album.cover) {
      const coverPath =
        `uploads/gallery/${album.cover}`;

      if (fs.existsSync(coverPath)) {
        fs.unlinkSync(coverPath);
      }
    }

    album.images.forEach((img) => {
      const imgPath =
        `uploads/gallery/${img}`;

      if (fs.existsSync(imgPath)) {
        fs.unlinkSync(imgPath);
      }
    });

    await Gallery.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        "Album deleted successfully",
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

            const photoPath =
  `uploads/gallery/${req.params.photoName}`;

if (fs.existsSync(photoPath)) {
  fs.unlinkSync(photoPath);
}

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
            res.status(500).json({
                message: "Server Error",
            });
        }
    }
);

module.exports = router;