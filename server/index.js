const express = require("express");
const app = express();
const cors = require("cors");
// const session = require("express-session");
const PORT = 3000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Connect to DB

dotenv.config();

mongoose.connect(process.env.CONNECT, {
  dbName: "auth",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Users
const user = require("./models/user");

// Middlewares
app.use(cors());
// app.use(session({ secret: "Shh, tis a secret!!!" }));
app.use("/admin", require("./routes/admin"));

// Routes
app.get("/dashboard", (req, res) => {
  user.findOne({ name: "Kost Baturin" }).then(d => res.send(d));
});

app.get("/dashboard/quantity", (req, res) => {
  user.find({}).then(d => res.send("" + d.length));
});

app.listen(PORT, () => {
  console.log("OK ===> ", PORT, process.pid);
});
