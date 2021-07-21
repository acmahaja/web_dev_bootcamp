const mongoose = require('mongoose');

const CampgroundSchema = mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    location:String,
    images: String
});

module.exports = mongoose.model('Campground', CampgroundSchema);