const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}))

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


app.post("/campgrounds/new", async (req,res)=>{
    const c = new Campground(req.body)
    await c.save()
    res.redirect(`/campgrounds/${c._id}`)
})

app.get("/campgrounds/new", (req,res)=>{
    res.render("campgrounds/new")
})

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
