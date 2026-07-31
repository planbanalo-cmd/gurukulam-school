const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");

const Admin = require("../models/Admin");
const sendEmail = require("../utils/sendEmail");

const router = express.Router();


// ==============================
// REGISTER ADMIN
// ==============================

router.post("/register", async (req, res) => {

  try {

    const { name, email, password } = req.body;

    // Check existing admin
    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {

      return res.status(400).json({
        message: "Admin already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create admin
    const admin = new Admin({
      name,
      email,
      password: hashedPassword,
    });

    await admin.save();

    res.status(201).json({
      message: "Admin registered successfully",
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
});


// ==============================
// LOGIN
// ==============================

router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    // Check admin
    const admin = await Admin.findOne({ email });

    if (!admin) {

      return res.status(400).json({
        message: "Invalid Email Or Password ❌",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(
      password,
      admin.password
    );

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid Email Or Password ❌",
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        id: admin._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // Success response
    res.status(200).json({
      token,

      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
});


// ==============================
// FORGOT PASSWORD
// ==============================

router.post("/forgot-password", async (req, res) => {

  try {

    const { email } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {

      return res.status(404).json({
        message: "Admin not found",
      });
    }

    // Generate OTP
    const otp = otpGenerator.generate(6, {

      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,

    });

    // Save OTP
    admin.otp = otp;

    admin.otpExpiry =
      Date.now() + 10 * 60 * 1000;

    await admin.save();

    // Send email
    await sendEmail(
      email,
      "Gurukulam Password Reset OTP",
      `Your OTP is: ${otp}`
    );

    res.status(200).json({
      message: "OTP sent to email",
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
});


// ==============================
// RESET PASSWORD
// ==============================

router.post("/reset-password", async (req, res) => {

  try {

    const {
      email,
      otp,
      newPassword,
    } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {

      return res.status(404).json({
        message: "Admin not found",
      });
    }

    // Check OTP
    if (
      admin.otp !== otp ||
      admin.otpExpiry < Date.now()
    ) {

      return res.status(400).json({
        message: "Invalid or expired OTP",
      });
    }

    // Hash new password
    const hashedPassword =
      await bcrypt.hash(newPassword, 10);

    // Update password
    admin.password = hashedPassword;

    // Clear OTP
    admin.otp = null;
    admin.otpExpiry = null;

    await admin.save();

    res.status(200).json({
      message: "Password reset successful",
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
});


// ==============================
// EXPORT
// ==============================

module.exports = router;