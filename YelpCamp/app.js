const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate');
const Joi = require('joi')
const session = require('express-session')
const morgan = require('morgan')


const ExpressError = require('./utils/ExpressError')
const catchAsync = require('./utils/catchAsync');

const mongoose = require('mongoose');

const campgroundRouter = require('./routes/campgrounds')
const reviewRouter = require('./routes/review')

const flash = require('connect-flash');
app.use(flash())
app.use(morgan('dev'))


mongoose.connect('mongodb://localhost:27017/YelpCamp', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB YelpCamp')
    })
    .catch((e) => {
        console.log("ERROR:");
        console.log(e);
    })

const sessionInfo = {
    secret: 'password',
    resave: false,
    saveUninitialized: true,
    cookies: {
        httpOnly: true,
        expires: Date.now() + 1000 *60 *60 *24 *7,
        maxAge: 1000 * 60 * 60 * 24 * 7,

    }
} 

app.use(session(sessionInfo))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

const Campground = new require('./models/campground');


app.use((req, res, next) => {
    res.locals.success = req.flash('success')
    res.locals.error = req.flash('error')
    next()
})

const validateReviews = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body.review)
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next()
    }
}

app.use('/campgrounds', campgroundRouter);
app.use('/campgrounds/:id/review/', reviewRouter);


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


app.get('/makecampground', catchAsync(async (req, res) => {
    const camp = new Campground({ title: 'My Backyard', description: 'cheap camping' })
    await camp.save();
    res.send(camp)
}))