const express = require("express");
const router = express.Router();
const User = require("../../models/user");

// User FIND for login
router.get("/:login", (req, res) => {
  const login = req.params.login;
  User.findOne({ login })
    .then(d => {
      res.cookie(d.name, "1", { maxAge: 1000 });
      res.send(d);
    })
    .catch(err => console.log(err));
});

module.exports = router;
