import HomeGallery from "../models/HomeGallery.js";
import cloudinary from "../config/cloudinary.js";

export const getHomeGallery =
  async (req, res) => {

    try {

      const items =
        await HomeGallery.find()
          .sort({
            createdAt: -1,
          });

      res.json(items);

    } catch (err) {

      res.status(500).json({
        message:
          "Failed to fetch gallery",
      });

    }

};
export const uploadHomeGallery =
  async (req, res) => {

    try {

      if (!req.file) {

        return res
          .status(400)
          .json({
            message:
              "Image required",
          });

      }

      const item =
        await HomeGallery.create({
          title: req.body.title,

          image:
            req.file.path,

          cloudinaryId:
            req.file.filename,
        });

      res.json(item);

    } catch (err) {

      console.log(err);

      res.status(500).json({
        message:
          "Upload failed",
      });

    }

};
export const deleteHomeGallery =
  async (req, res) => {

    try {

      const item =
        await HomeGallery.findById(
          req.params.id
        );

      if (!item) {

        return res
          .status(404)
          .json({
            message:
              "Not found",
          });

      }

      if (
        item.cloudinaryId
      ) {

        await cloudinary.uploader.destroy(
          item.cloudinaryId
        );

      }

      await item.deleteOne();

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

};