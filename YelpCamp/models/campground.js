const mongoose = require('mongoose');
const Review = require('./review');
const {Schema} = mongoose;


const CampgroundSchema = mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    location:String,
    images: String,
    reviews: [
        {
            type: Schema.Types.ObjectID,
            ref: 'Review',
        }
    ]
});

CampgroundSchema.post('findOneAndDelete', async function(doc){
    console.log('Deleted Campground');
    doc.reviews.forEach(async reviewid => {
        await Review.findByIdAndDelete(reviewid)
    });
    // if (doc) {
    //     for (const review_id in doc.reviews) {
    //         console.log(review_id)
    //     }
    // }
})

module.exports = mongoose.model('Campground', CampgroundSchema);