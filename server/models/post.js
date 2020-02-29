const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userId: String,
  title: String,
  date: Date,
  isMain: Boolean,
  author: String,
  img: String,
  text: String,
});

module.exports = mongoose.model("Post", schema);
