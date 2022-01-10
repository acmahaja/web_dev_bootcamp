const cities = require('./cities')
const {places, descriptors} = require('./seedHelpers')

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/yelp-camp");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database Connected");
});

const Campground = require("../models/campground");

const seedDB = async() => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random()*1000);

        const c = new Campground({title: `${descriptors[Math.floor(Math.random()*descriptors.length)]} ${places[Math.floor(Math.random()*places.length)]}`,location: `${cities[random1000].city}, ${cities[random1000].state}`})
        await c.save()
    }
}

seedDB().then(()=> mongoose.connection.close());