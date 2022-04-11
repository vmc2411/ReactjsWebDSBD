const express = require("express");
const router = express.Router();

const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

//REGISTER
router.post("/register", async (req, res) => {
  const { fullname, username, password, isAdmin } = req.body;
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
      fullname,
      username,
      password: hashedPassword,
      isAdmin,
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

    res.status(200).json({
      _id: user._id,
      success: true,
      fullname: user.fullname,
      message: "Loggin successfully",
      accessToken,
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ success: false, message: "Username or Password was wrong!" });
  }
});

//LOGINADMIN
router.post("/admin/login", async (req, res) => {
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
    //check isadmin
    if (user.isAdmin != true) {
      return res
        .status(404)
        .json({ success: false, message: "You are not Admin !" });
    } else {
      //return token
      const accessToken = jwt.sign(
        { userId: user._id },
        process.env.ACCESS_TOKEN_SECRET
      );

      res.status(200).json({
        _id: user._id,
        success: true,
        fullname: user.fullname,
        message: "Loggin successfully",
        isAdmin: user.isAdmin,
        accessToken,
      });
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ success: false, message: "Username or Password was wrong!" });
  }
});

//update
router.route('/update/:id').put(function (req, res) {

  User.findById(req.params.id, async function (err, taikhoan) {
      if (!taikhoan)
          return next(new Error('Không tìm được tài khoản'));
      else {
          taikhoan.fullname = req.body.fullname;
          taikhoan.username = req.body.username;
          taikhoan.isAdmin = req.body.isAdmin;
          taikhoan.save().then(taikhoan => {
              res.json('TaiKhoan Updated Successfully');
          })
              .catch(err => {
                  res.status(400).send("Unable To Update TaiKhoan");
              });
      }
  });
});

//get all taikhoan
router.route('/').get(function (req, res) {
  User.find(function (err, taikhoan) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(taikhoan);
    }
  });
});

//get byid taikhoan
router.route('/:id').get(function (req, res) {
  let id = req.params.id;
  User.findById(id, function (err, taikhoan) {
    res.json(taikhoan);
  });
});

module.exports = router;
