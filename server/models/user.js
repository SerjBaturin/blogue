const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  type: Date,
});

 module.exports = mongoose.model("User", schema);
