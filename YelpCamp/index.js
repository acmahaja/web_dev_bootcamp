const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate')
const app = express();
const catchAsync = require('./utils/catchAsync')
const ExpressError = require('./utils/ExpressError')
const Joi = require('joi')
const Campground = require('./models/campground')
const Review = require('./models/review')

const campgroudSchema = require('./schemas').campgroudSchema;
const reviewSchema = require('./schemas').reviewSchema;
const campground = require('./models/campground');
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

mongoose.connect('mongodb://localhost:27017/yelp-camp', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(() => {
    console.log("Mongo Connection Open");
}).catch(err => {
    console.log("Mongo Connection Error");
    console.log(err);
});


const validateCampground = (req, res, next) => {
    const { error } = campgroudSchema.validate(req.body.campground);
    if (error) {
        const message = error.details.map(el => el.message).join(',')
        throw new ExpressError(message, 400)
    } else {
        next();
    }
}

const validateReview = (req, res, next) => {
    console.log(req.body);
    const { error } = reviewSchema.validate(req.body.review);
    if (error) {
        const message = error.details.map(el => el.message).join(',')
        throw new ExpressError(message, 400)
    } else {
        next();
    }
}

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.get('/campgrounds/new', async(req, res) => {
    res.render('campgrounds/new');
})

app.put('/campgrounds/:id', validateCampground, catchAsync(async(req, res) => {
    await Campground.findByIdAndUpdate(req.params.id, req.body.campground);
    res.redirect(`/campgrounds/${req.params.id}`);

}))

app.delete('/campgrounds/:id/reviews/:reviewId', catchAsync(async(req, res) => {
    await Campground.findByIdAndUpdate(req.params.id, { $pull: { reviews: req.params.reviewId } })
    await Review.findById(req.params.reviewId);
    res.redirect(`/campgrounds/${req.params.id}`);

}))

app.post('/campgrounds/:id/reviews', validateReview, catchAsync(async(req, res) => {
    // res.send('YOU MADE IT')
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review)
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    res.redirect(`/campgrounds/${req.params.id}`);

}))

app.delete('/campgrounds/:id', async(req, res) => {
    await Campground.findByIdAndDelete(req.params.id);
    res.redirect('/campgrounds');
});

app.get('/campgrounds/:id/edit', async(req, res) => {
    const camp = await Campground.findById(req.params.id);
    res.render('campgrounds/edit', { camp })
})

app.get('/campgrounds/:id', catchAsync(async(req, res) => {
    const camp = await Campground.findById(req.params.id).populate('reviews');
    console.log(camp.reviews);
    res.render('campgrounds/show', { camp });

}))

app.get('/campgrounds', async(req, res) => {
    const camps = await Campground.find({});
    res.render('campgrounds/index', { camps });

})

app.post('/campgrounds', validateCampground, catchAsync(async(req, res) => {
    const camp = new Campground(req.body.campground)
    await camp.save();
    res.redirect(`/campgrounds/${camp.id}`);
}))

app.get('/campgrounds', async(req, res) => {
    const camps = await Campground.find({});
    res.render('campgrounds/index', { camps });

})

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found!', 404))
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Something Went Wrong'
    res.status(statusCode).render('error', { err })
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})