//Route for user login
import userModel from "./../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const createToken = async (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // ckecking user already exits or not
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "email doesn't exists",
      });
    }
    const isMath = await bcrypt.compare(password, user.password);
    if (isMath) {
      const token = await createToken(user._id);
      res.json({ success: true, token, message: "login success" });
    } else {
      res.json({ success: false, message: "Invalid password" });
    }
  } catch (error) {
    console.log(error.message || error);
    res.json({ success: false, message: error.message });
  }
};

// route for use register
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // ckecking user already exits or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({
        success: false,
        message: "email already exists",
      });
    }
    // validating email format & strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }
    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await userModel({
      name,
      email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    const token = await createToken(user._id);
    res.json({ success: true, message: "Register User success", token });
  } catch (error) {
    console.log(error.message || error);
    res.json({ success: false, message: error.message });
  }
};

// Route for admin login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, message: "login success", token });
    } else {
      res.json({
        success: false,
        message: "invalid credentials",
      });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { loginUser, registerUser, adminLogin };
