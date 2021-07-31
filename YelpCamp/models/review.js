const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    rating: {
        type: Number,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});


ReviewSchema.post('findOneAndDelete', async function (review) {
    console.log('Deleted Review')
    console.log(review)
})

module.exports = mongoose.model('Review', ReviewSchema);