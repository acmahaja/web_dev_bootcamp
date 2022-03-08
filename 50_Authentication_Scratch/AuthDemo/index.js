const express = require("express");
const app = express();

const bcrypt = require("bcrypt");

const session = require("express-session");

const mongoose = require("mongoose");
const User = require("./models/User");

mongoose.connect("mongodb://localhost:27017/authDemo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "notagoodsecret",
    resave: true,
    saveUninitialized: true,
  })
);

const requireLogin = (req,res,next)=>{
    if(!req.session.user_id)
        return res.redirect('/login')
    next()
}

app.post("/logout", (req,res)=>{
    req.session.destroy()
    res.send("You've been logged out<br><a href='/login'>Login</a>")
})

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const validPassword = await User.findAndValidate(username, password)
  if (validPassword) {
    req.session.user_id = foundUser._id;
    return res.send("welcome!");
  }
  res.send("Try Again");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({
    username: username,
    password: password,
  });
  req.session.user_id = newUser._id
  await newUser.save();
  res.redirect("/");
});

app.get("/secret", requireLogin, (req, res) => {
  res.render("secret");
});

app.get("/", (req, res) => {
  res.send("THIS IS THE HOMEPAGE");
});

app.listen(3000, () => {
  console.log("SERVING YOUR APP!");
});
