const express = require("express");

const multer = require("multer");

const { CloudinaryStorage } = require("multer-storage-cloudinary");

const cloudinary = require("../config/cloudinary");

const Newsletter = require("../models/Newsletter");

const router = express.Router();


// ================= CLOUDINARY STORAGE =================

const storage = new CloudinaryStorage({
  cloudinary,

  params: async (req, file) => {

    if (file.fieldname === "pdf") {

      return {
        folder: "gurukulam-newsletters/pdfs",
        resource_type: "raw",
      };
    }

    return {
      folder: "gurukulam-newsletters/covers",
    };
  },
});

const upload = multer({
  storage,
}).fields([
  {
    name: "pdf",
    maxCount: 1,
  },
  {
    name: "coverImage",
    maxCount: 1,
  },
]);


// ================= GET ALL NEWSLETTERS =================

router.get("/", async (req, res) => {

  try {

    const newsletters =
      await Newsletter.find().sort({
        createdAt: -1,
      });

    res.json(newsletters);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
});


// ================= ADD NEWSLETTER =================

router.post("/", upload, async (req, res) => {

  try {

    console.log("BODY:", req.body);

    console.log("FILES:", req.files);

    const { title, description } =
      req.body;

    if (!req.files?.pdf) {

      return res.status(400).json({
        message: "PDF is required",
      });
    }

    const pdf =
      req.files["pdf"][0].path;

    const coverImage =
      req.files["coverImage"]?.[0]
        ?.path || "";

    const newsletter =
      new Newsletter({
        title,
        description,
        pdf,
        coverImage,
      });

    await newsletter.save();

    res.json({
      message:
        "Newsletter uploaded successfully",

      data: newsletter,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
});


// ================= DELETE NEWSLETTER =================

router.delete("/:id", async (req, res) => {

  try {

    await Newsletter.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        "Newsletter deleted successfully",
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
});


// ================= UPDATE NEWSLETTER =================

router.put("/:id", async (req, res) => {

  try {

    const { title, description } =
      req.body;

    const updated =
      await Newsletter.findByIdAndUpdate(
        req.params.id,
        {
          title,
          description,
        },
        { new: true }
      );

    res.json({
      message:
        "Newsletter updated successfully",

      updated,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;