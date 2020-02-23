const express = require("express");
const router = express.Router();
const User = require("../../models/user");

// User FIND for login
router.get("/:login", (req, res) => {
  const login = req.params.login;
  User.findOne({ login }).then(d => {
    res.send(d);
  });
});

module.exports = router;
