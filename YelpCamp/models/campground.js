const mongoose = require('mongoose');
const review = require('./review');
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String,
    },
    location: {
        type: String
    },
    image: {
        type: String
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }]
});

CampgroundSchema.post('findOneAndDelete', async function(doc) {
    if (doc) {
        if (doc) {
            await review.remove({
                _id: {
                    $in: doc.reviews
                }
            })
        }
    }
})

module.exports = mongoose.model('Campground', CampgroundSchema)