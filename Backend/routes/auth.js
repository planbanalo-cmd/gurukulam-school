const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    const token = jwt.sign(
      { role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" } // expires in 1 day
    );

    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid credentials ❌" });
});

module.exports = router;