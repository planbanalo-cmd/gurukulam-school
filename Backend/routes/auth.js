const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");

const Admin = require("../models/Admin");
const sendEmail = require("../utils/sendEmail");

const router = express.Router();


// REGISTER ADMIN
router.post("/register", async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return res.status(400).json({
        message: "Admin already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new Admin({
      name,
      email,
      password: hashedPassword,
    });

    await admin.save();

    res.json({
      message: "Admin registered successfully",
    });

  } catch (err) {

    res.status(500).json({
      message: "Server Error",
    });
  }
});


// LOGIN
router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    console.log("EMAIL:", email);
    console.log("PASSWORD:", password);

    const admin = await Admin.findOne({ email });

    console.log("ADMIN FOUND:", admin);

    if (!admin) {

      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    console.log("HASHED PASSWORD:", admin.password);

   console.log("EMAIL:", email);

console.log("ENTERED PASSWORD:", password);

console.log("DATABASE PASSWORD:", admin.password);

const isMatch = await bcrypt.compare(
  password,
  admin.password
);



    console.log("PASSWORD MATCH:", isMatch);

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: admin._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.json({
      token,
      admin: {
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


// FORGOT PASSWORD
router.post("/forgot-password", async (req, res) => {

  try {

    const { email } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({
        message: "Admin not found",
      });
    }

    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    admin.otp = otp;

    admin.otpExpiry = Date.now() + 10 * 60 * 1000;

    await admin.save();

    await sendEmail(
      email,
      "Gurukulam Password Reset OTP",
      `Your OTP is: ${otp}`
    );

    res.json({
      message: "OTP sent to email",
    });

  } catch (err) {

    res.status(500).json({
      message: "Server Error",
    });
  }
});


// RESET PASSWORD
router.post("/reset-password", async (req, res) => {

  try {

    const { email, otp, newPassword } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({
        message: "Admin not found",
      });
    }

    if (
      admin.otp !== otp ||
      admin.otpExpiry < Date.now()
    ) {
      return res.status(400).json({
        message: "Invalid or expired OTP",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    admin.password = hashedPassword;

    admin.otp = null;
    admin.otpExpiry = null;

    await admin.save();

    res.json({
      message: "Password reset successful",
    });

  } catch (err) {

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;