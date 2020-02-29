const express = require("express");
const router = express.Router();
const Post = require("../../models/post");

// Posts Find All
router.get("/posts", (req, res) => {
  Post.find()
    .then(d => {
      res.send(d);
    })
    .catch(err => console.log(err));
});

// MainPost Find
router.get("/main-post", (req, res) => {
  Post.findOne({ isMain: true })
    .then(d => {
      res.send(d);
    })
    .catch(err => console.log(err));
});

module.exports = router;
