const express = require("express");
const multer = require("multer");
const path = require("path");

const Newsletter = require("../models/Newsletter");

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


// GET ALL NEWSLETTERS

router.get("/", async (req, res) => {

  try {

    const newsletters =
      await Newsletter.find().sort({
        createdAt: -1,
      });

    res.json(newsletters);

  } catch (err) {

    res.status(500).json({
      message: "Server Error",
    });
  }
});


// ADD NEWSLETTER

router.post("/", upload.single("pdf"), async (req, res) => {
  try {

    // 👇 ADD THESE LINES HERE
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const { title, description } = req.body;

    const newsletter = new Newsletter({
      title,
      description,
      pdf: req.file.filename,
    });

    await newsletter.save();

    res.json({
      message: "Newsletter uploaded successfully",
      data: newsletter,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// DELETE NEWSLETTER

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

    res.status(500).json({
      message: "Server Error",
    });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { title, description } = req.body;

    const updated = await Newsletter.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );

    res.json({
      message: "Newsletter updated successfully",
      updated,
    });

  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;