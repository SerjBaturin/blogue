const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  login: String,
  email: String,
  role: String,
  img: String,
  password: String,
});

module.exports = mongoose.model("User", schema);
