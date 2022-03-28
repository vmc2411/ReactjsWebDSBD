const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const sendToken = require("../jwt/jwt");

//REGISTER
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(404).json({
      success: false,
      message: "Missing username or password",
    });
  try {
    //check for existing user
    const user = await User.findOne({ username });
    if (user)
      return res
        .status(400)
        .json({ success: false, message: "Username have already" });

    //generate new password
    const hashedPassword = await argon2.hash(password);
    //create new user
    const newUser = new User({
      username,
      password: hashedPassword,
    });

    //save newuser in data
    await newUser.save();
    //return token
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.status(200).json({
      success: true,
      message: "User Created Successfully",
      accessToken,
    });
  } catch (err) {
    console.log(err);
  }
});
//LOGIN
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  //Simple valadation
  if (!username || !password)
    return res
      .status(404)
      .json({ success: false, message: "Missing username or password" });
  try {
    //check user
    const user = await User.findOne({ username });
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "Username or Password was wrong !" });

    //check password
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid)
      return res
        .status(404)
        .json({ success: false, message: "Username or Password was wrong!" });

    //return token
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET
    );

    res
      .status(200)
      .json({ success: true, message: "Loggin successfully", accessToken });
  } catch (err) {
    console.log(error);
    res.status(500).json("Username and password wrong!");
  }
});
module.exports = router;
