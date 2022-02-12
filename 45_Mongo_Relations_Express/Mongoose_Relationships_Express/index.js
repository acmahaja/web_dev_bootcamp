const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const Product = require('./models/product')

mongoose
  .connect("mongodb://localhost:27017/farmStand", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connection Open!!!");
  })
  .catch((err) => {
    console.log("OH NO ERROR");
    console.log(err);
  });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.get("/dog", (req, res) => {
  res.send("WOOF!");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
