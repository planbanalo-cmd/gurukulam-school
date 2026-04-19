const express = require("express");
const Notice = require("../models/Notice");
const auth = require("../middleware/auth");

const router = express.Router();

// Add notice (Protected)
router.post("/", auth, async (req, res) => {
  const notice = new Notice(req.body);
  await notice.save();
  res.send(notice);
});

// Get all notices
router.get("/", async (req, res) => {
  const notices = await Notice.find().sort({ date: -1 });
  res.send(notices);
});

// Delete notice
router.delete("/:id", auth, async (req, res) => {
  await Notice.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

module.exports = router;