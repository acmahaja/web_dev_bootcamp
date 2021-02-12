const mongoose = require('mongoose');
const Campground = require('../models/campground')
const cities = require('./cities')
const { places, descriptors } = require('./seedHelpers')

mongoose.connect('mongodb://localhost:27017/yelp-camp', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(() => {
    console.log("Mongo Connection Open");
}).catch(err => {
    console.log("Mongo Connection Error");
    console.log(err);
});

const sample = array => array[Math.floor(Math.random() * array.length)]

const seedDB = async() => {
    await Campground.deleteMany({})
    for (let i = 0; i < 50; i++) {
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            name: `${sample(places)} ${sample(places)} Camp`,
            description: `${sample(descriptors)}`,
            location: `${sample(cities).city}, ${sample(cities).state}`,
            image: `https://source.unsplash.com/collection/483251`,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis dolore omnis veritatis nulla hic impedit fuga possimus quos nisi doloremque vitae ad qui eveniet, deserunt labore accusantium, vero deleniti natus?",
            price: price
        });
        //        console.log(camp);
        await camp.save();
    }
}



seedDB().then(() => {
    mongoose.connection.close();
});