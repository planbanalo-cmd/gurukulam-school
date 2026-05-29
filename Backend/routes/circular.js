const express = require("express");
const multer = require("multer");

const cloudinary = require("cloudinary").v2;

const {
  CloudinaryStorage,
} = require("multer-storage-cloudinary");

const Circular = require("../models/Circular");

const router = express.Router();


// =========================
// CLOUDINARY CONFIG
// =========================

cloudinary.config({
  cloud_name:
    process.env.CLOUDINARY_CLOUD_NAME,

  api_key:
    process.env.CLOUDINARY_API_KEY,

  api_secret:
    process.env.CLOUDINARY_API_SECRET,
});


// =========================
// CLOUDINARY STORAGE
// =========================

const storage =
  new CloudinaryStorage({

    cloudinary,

    params: async (
      req,
      file
    ) => {

      return {

        folder:
          "gurukulam-circulars",

        resource_type:
          "raw",

        public_id:
          Date.now() +
          "-" +
          file.originalname
            .split(".")[0],
      };
    },
  });


// =========================
// MULTER
// =========================

const upload = multer({
  storage,
});


// =========================
// GET ALL CIRCULARS
// =========================

router.get("/", async (req, res) => {

  try {

    const circulars =
      await Circular.find().sort({
        createdAt: -1,
      });

    res.json(circulars);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
});


// =========================
// ADD CIRCULAR
// =========================

router.post(
  "/",
  upload.single("pdf"),

  async (req, res) => {

    try {

      const {
        title,
        desc,
      } = req.body;

      if (!req.file) {

        return res.status(400).json({
          message:
            "PDF is required",
        });
      }

      const circular =
        new Circular({

          title,

          desc,

          pdf:
            req.file.path,
        });

      await circular.save();

      res.json({

        message:
          "Circular uploaded successfully",

        data: circular,
      });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        message: "Server Error",
      });
    }
  }
);


// =========================
// DELETE CIRCULAR
// =========================

router.delete(
  "/:id",

  async (req, res) => {

    try {

      await Circular.findByIdAndDelete(
        req.params.id
      );

      res.json({

        message:
          "Circular deleted successfully",
      });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        message: "Server Error",
      });
    }
  }
);


// =========================
// UPDATE CIRCULAR
// =========================

router.put(
  "/:id",

  async (req, res) => {

    try {

      const {
        title,
        desc,
      } = req.body;

      const updated =
        await Circular.findByIdAndUpdate(

          req.params.id,

          {
            title,
            desc,
          },

          { new: true }
        );

      res.json({

        message:
          "Circular updated successfully",

        updated,
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