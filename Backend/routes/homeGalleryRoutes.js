import express from "express";

import {
  getHomeGallery,
  uploadHomeGallery,
  deleteHomeGallery,
} from "../controllers/homeGalleryController.js";

import upload from "../middleware/upload.js";

const router = express.Router();

router.get(
  "/",
  getHomeGallery
);

router.post(
  "/",
  upload.single("image"),
  uploadHomeGallery
);

router.delete(
  "/:id",
  deleteHomeGallery
);

export default router;