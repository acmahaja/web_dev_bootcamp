const Campground = require('../models/campground')
const cities = require('./cities')
const { descriptors, places} = require('./seedHelpers')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/YelpCamp', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB YelpCamp')
    })
    .catch((e) => {
        console.log("ERROR:");
        console.log(e);
    });

const sample = array => array[Math.floor(Math.random() * array.length)]

const seedDB = async () => {
    await Campground.deleteMany({});

    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random()*999)
        const setPrice = Math.floor(Math.random()*20 + 10)
        const c  = new Campground(
            {
                location: `${cities[random1000].city}, ${cities[random1000].state}`,
                title: `${sample(descriptors)} ${sample(places)}`,
                // price: Number,
                description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, provident. Nesciunt sapiente, reprehenderit explicabo quibusdam laboriosam minus quam earum nisi veritatis cum maxime fugiat magnam asperiores sint rerum minima temporibus.`,
                images:'https://source.unsplash.com/collection/483251',
                price: setPrice
                // location: ``

            }
        );
        console.log(c)
        await c.save()
    }

    // const c = new Campground({title: 'purple field'})
    // await c.save()
}

seedDB().then(async ()=>{
    await mongoose.connection.close()
        .then(()=>{
            console.log("closed connection")
        })
    
})