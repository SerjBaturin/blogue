const express = require("express");
const app = express();
const cors = require("cors");
// const session = require("express-session");
const PORT = 3000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

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
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json());
app.use("/admin", require("./routes/admin"));

app.listen(PORT, () => {
  console.log("OK ===> ", PORT, process.pid);
});
