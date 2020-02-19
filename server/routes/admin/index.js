const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const Post = require("../../models/post");

// ADMIN API

router.get("/", (req, res) => {
  res.send("TIS ADMIN ROUT");
});

// Users FIND
router.get("/users/all", (req, res) => {
  User.find().then(d => res.send(d.map(item => item.name).join(", ")));
});

router.get("/users/:name", (req, res) => {
  User.findOne({ name: req.params.name })
    .then(d => res.send(`${d.name} ${d.email} ${d._id}`))
    .catch(() => res.send("User not found"));
});

// Users ADD
router.post("/users/add", (req, res) => {
  const user = new User(req.body);
  user.save();
});

// Users DELETE
router.delete("/users/delete/:id", (req, res) => {
  User.findByIdAndDelete({ _id: req.params.id }).then(d => console.log(d.name));
});

// Posts FIND
router.get("/posts/all", (req, res) => {
  Post.find().then(d => res.send(d));
});

router.get("/posts/:author", (req, res) => {
  Post.find({ author: req.params.author })
    .then(d => res.send(d))
    .catch(() => res.send("Post not found"));
});

router.get("/posts/single/:title", (req, res) => {
  Post.findOne({ title: req.params.title })
    .then(d => res.send(d))
    .catch(() => res.send("Post not found"));
});

// Posts ADD
router.post("/posts/add", (req, res) => {
  const post = new Post(req.body);
  post.save();
});

// Posts DELETE
router.delete("/posts/delete/:id", (req, res) => {
  Post.findByIdAndDelete({ _id: req.params.id }).then(d =>
    console.log(d.title),
  );
});

module.exports = router;
