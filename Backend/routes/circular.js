const express = require("express");
const multer = require("multer");
const path = require("path");

const Circular = require("../models/Circular");

const router = express.Router();


// STORAGE

const storage = multer.diskStorage({

  destination: function (req, file, cb) {

    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {

    cb(
      null,
      Date.now() +
        path.extname(file.originalname)
    );
  },
});

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

      const { title, desc } =
        req.body;

      const circular =
        new Circular({
          title,
          desc,
          pdf: req.file.filename,
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

router.delete("/:id", async (req, res) => {

  try {

    await Circular.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        "Circular deleted successfully",
    });

  } catch (err) {

    res.status(500).json({
      message: "Server Error",
    });
  }
});


// =========================
// UPDATE CIRCULAR
// =========================

router.put("/:id", async (req, res) => {

  try {

    const { title, desc } =
      req.body;

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

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;