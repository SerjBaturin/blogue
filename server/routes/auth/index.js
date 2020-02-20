const express = require("express");
const router = express.Router();
const User = require("../../models/user");

// User FIND for login
router.get("/user/:info", (req, res) => {
  const info = req.params.info.split("&");
  const [login, password] = info;
  User.findOne({ login, password })
    .then(d => {
      console.log(d);
      res.cookie(d.name, "1", { maxAge: 1000 });
      res.send(d);
    })
    .catch(err => console.log(err));
});

module.exports = router;
