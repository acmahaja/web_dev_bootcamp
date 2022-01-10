const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/yelp-camp");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database Connected");
});

const Campground = require("./models/campground");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/campgrounds/:id", async (req, res) => {
  let { id } = req.params;
  const campground = await Campground.findById(`${id}`);
  res.render("campgrounds/show", { campground });
});

app.get("/campgrounds", async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/index", { campgrounds });
});

app.listen(3000, () => {
  console.log("Serving port 3000");
});
