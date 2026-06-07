const express = require("express");

const router = express.Router();

const StudentAchievement =
  require("../models/StudentAchievement");

const multer = require("multer");

const cloudinary =
  require("../config/cloudinary");

const {
  CloudinaryStorage,
} = require("multer-storage-cloudinary");

const storage =
  new CloudinaryStorage({
    cloudinary,

    params: {
      folder: "student-achievements",

      allowed_formats: [
        "jpg",
        "jpeg",
        "png",
        "webp",
      ],
    },
  });

const upload =
  multer({ storage });


// GET ALL STUDENTS

router.get("/", async (req, res) => {

  try {

    const students =
      await StudentAchievement.find()
      .sort({ createdAt: -1 });

    res.json(students);

  } catch (err) {

    res.status(500).json({
      message:
        "Failed to fetch students",
    });

  }

});


// UPLOAD STUDENT

router.post(
  "/",
  upload.single("image"),
  async (req, res) => {

    try {

      const student =
        await StudentAchievement.create({

          name:
            req.body.name,

          achievement:
            req.body.achievement,

          badge:
            req.body.badge,

          image:
            req.file.path,

          cloudinaryId:
            req.file.filename,

        });

      res.json(student);

    } catch (err) {

      console.log(err);

      res.status(500).json({
        message:
          "Upload failed",
      });

    }

  }
);


// DELETE STUDENT

router.delete(
  "/:id",
  async (req, res) => {

    try {

      const student =
        await StudentAchievement.findById(
          req.params.id
        );

      if (!student) {

        return res.status(404).json({
          message:
            "Student not found",
        });

      }

      if (
        student.cloudinaryId
      ) {

        await cloudinary.uploader.destroy(
          student.cloudinaryId
        );

      }

      await student.deleteOne();

      res.json({
        success: true,
      });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        message:
          "Delete failed",
      });

    }

  }
);

module.exports = router;