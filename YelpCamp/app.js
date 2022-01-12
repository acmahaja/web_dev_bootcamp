const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/yelp-camp");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database Connected");
});

const Campground = require("./models/campground");
const { log } = require("console");

app.get("/", (req, res) => {
  res.render("home");
});

app.delete("/campgrounds/:id/delete", async (req, res) => {
    await Campground.findByIdAndDelete(req.params.id)
    res.redirect(`/campgrounds`);
});

app.put("/campgrounds/:id/edit", async (req, res) => {
  let { id } = req.params;
  await Campground.findByIdAndUpdate(id, { ...req.body });
  res.redirect(`/campgrounds/${id}`);
});

app.get("/campgrounds/:id/edit", async (req, res) => {
  let { id } = req.params;
  let campground = await Campground.findById(id);
  res.render("campgrounds/edit", { campground });
});

app.post("/campgrounds/new", async (req, res) => {
  const c = new Campground(req.body);
  await c.save();
  res.redirect(`/campgrounds/${c._id}`);
});

app.get("/campgrounds/new", (req, res) => {
  res.render("campgrounds/new");
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
