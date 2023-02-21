const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const experienceRoute = require("./routes/experience");
const skillRoute = require("./routes/skill");
const projectRoute = require("./routes/project");

//Connect to db
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

//Middleware
app.use(express.json());

//Avoid CORS error

const corsOpts = {
  origin: "https://salim-portfolio.vercel.app",

  optionsSuccessStatus: 200,
};

app.use(cors(corsOpts));

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://salim-portfolio.vercel.app"
  ); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Routes
app.use("/api", experienceRoute);
app.use("/api", skillRoute);
app.use("/api", projectRoute);

app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});

app.get("/", (req, res) => {
  res.send("Port 5000 is working");
});

module.exports = app;
