const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate');
const Joi = require('joi')

const ExpressError = require('./utils/ExpressError')
const catchAsync = require('./utils/catchAsync');
const { campgroundSchema, reviewSchema } = require('./models/schemas')

const Review = require('./models/review');
const mongoose = require('mongoose');

const validateCampground = (req,res,next)=>{
    const {error} = campgroundSchema.validate(req.body)
    if(error){
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg,400)
    } else {
        next()
    }
}

const validateReviews = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body.review)
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next()
    }
}



mongoose.connect('mongodb://localhost:27017/YelpCamp', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB YelpCamp')
    })
    .catch((e) => {
        console.log("ERROR:");
        console.log(e);
    })

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const Campground = new require('./models/campground');

app.delete('/campgrounds/:id/review/:reviewid', catchAsync(async (req, res) => {
 //   console.log(Review.findByIdAndDelete(req.params.reviewid))
    
    await Review.findByIdAndDelete(req.params.reviewid)
    await Campground.findByIdAndUpdate(req.params.id, { $pull: { reviews: req.params.reviewid}})
    res.redirect(`/campgrounds/${req.params.id}`)
}));

app.post('/campgrounds/:id/review/new', validateReviews, catchAsync(async (req,res)=>{
    
    const newReview = new Review(req.body.review);
    console.log(req.body);
    const campground = await Campground.findById(req.params.id);
    campground.reviews.push(newReview);
    await newReview.save()
    await campground.save()
    res.redirect(`/campgrounds/${req.params.id}`)
}))


app.put('/campgrounds/:id/edit', validateCampground , catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndUpdate(id, req.body);
    console.log(id);
    res.redirect(`/campgrounds/${id}`)
}))

app.get('/campgrounds/:id/edit', catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id)

    res.render('campgrounds/edit', { campground })
}))


app.get('/campgrounds/new', catchAsync(async (req, res) => {
    res.render('campgrounds/new')
}))

app.post('/campgrounds/new', validateCampground ,catchAsync(async (req, res, next) => {
    // // if(!req.body.campground) throw new ExpressError('Invalid Campground Data', 400)
    // const campgroundSchema = Joi.object({
    //     // campground: Joi.object({
    //         title: Joi.string().required(),
    //         price: Joi.number().required().min(0),
    //         image: Joi.string().required(),
    //         location: Joi.string().required(),
    //         description: Joi.string().required(),

    //     // }).required()
    // })
    // console.log(req.body);
    // const {error} = campgroundSchema.validate(req.body)
    // if(error){
    //     const msg = error.details.map(el => el.message).join(',')
    //     throw new ExpressError(msg,400)
    // }
    const c = new Campground(req.body);
    await c.save();
    res.redirect(`/campgrounds/${c.id}`)
}))


app.delete('/campgrounds/:id', catchAsync(async (req, res) => {
    // const campgrounds = Campground.findById({})
    const { id } = req.params;
    
    await Campground.findByIdAndDelete(id)

    res.redirect(`/campgrounds`)
}))

app.get('/campgrounds/:id', catchAsync(async (req, res) => {
    // const campgrounds = Campground.findById({})
    const { id } = req.params;
    const campground = await Campground.findById(id).populate('reviews')
    
    res.render('campgrounds/show', { campground })
}))


app.get('/campgrounds', catchAsync(async (req, res) => {
    // const campgrounds = Campground.findById({})
    const campgrounds = await Campground.find()
    res.render('campgrounds/index', { campgrounds })
}))

app.get('/makecampground', catchAsync(async (req, res) => {
    const camp = new Campground({ title: 'My Backyard', description: 'cheap camping' })
    await camp.save();
    res.send(camp)
}))

app.get('/', (req, res) => {
    // res.send('Welcome to YelpCamp')
    res.render('home')
})


app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found 🔍', 404))
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', {err})
    // res.send("Oh Yikes, something broke 😱")
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})
