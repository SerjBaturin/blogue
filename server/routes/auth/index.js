const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const dotenv = require("dotenv");
const JWT = require("jsonwebtoken");

dotenv.config();

// User FIND for login
router.get("/user/:login", (req, res) => {
  const login = req.params.login;
  User.findOne({ login }).then(d => {
    const payload = {
      name: d.name,
      email: d.email,
      password: d.password,
    };
    const token = JWT.sign(payload, process.env.JWT_SECRET_KEY);
    res
      .cookie("ACCESS_TOKEN", token, {
        maxAge: 3600000,
      })
      .status(200)
      .send(d.role);
  });
});

router.get("/logged", (req, res) => {
  res.send("admin");
});

module.exports = router;
