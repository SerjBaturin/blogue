const express = require("express");
const router = express.Router();
const User = require("../../models/user");

// User FIND for login
router.get("/:login", (req, res) => {
  const login = req.params.login;
  User.findOne({ login }).then(d => {
    res.cookie("USER", d.name, {
      maxAge: 3600000,
    });
    res.send(d.name);
  });
});

module.exports = router;
