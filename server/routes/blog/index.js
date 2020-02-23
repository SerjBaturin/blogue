const express = require("express");
const router = express.Router();
const Post = require("../../models/post");

// User FIND for login
router.get("/posts", (req, res) => {
  Post.find()
    .then(d => {
      res.send(d);
    })
    .catch(err => console.log(err));
});

module.exports = router;
