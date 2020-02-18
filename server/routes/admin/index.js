const express = require("express");
const router = express.Router();
const User = require("../../models/user");

// ADMIN API

// Users FIND
router.get("/", (req, res) => {
  res.send("TIS ADMIN ROUT");
});

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
  console.log("HEY");
});

// Users DELETE
router.delete("/users/delete/:id", (req, res) => {
  User.deleteOne({ _id: req.params.id }).then(d => console.log(d.id));
});

// Posts
router.get("/posts/all", (req, res) => {
  res.send("TIS ADMIN ALL POSTS");
});

router.get("/posts/post", (req, res) => {
  res.send("TIS ADMIN ONE POST!");
});

module.exports = router;
