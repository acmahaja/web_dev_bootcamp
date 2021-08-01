const express = require('express')
const flash = require('connect-flash')
const app = express.Router()

const catchAsync = require('../utils/catchAsync');
const Campground = new require('../models/campground');
const { campgroundSchema } = require('../models/schemas')



const validateCampground = (req, res, next) => {
    const { error } = campgroundSchema.validate(req.body)
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next()
    }
}

app.put('/:id/edit', validateCampground, catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndUpdate(id, req.body);
    if (!campground) {
        req.flash('error', 'Cannot find campground')
        return res.redirect('/campgrounds')
    }    res.redirect(`/campgrounds/${id}`)
}))

app.get('/:id/edit', catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id)
    if (!campground) {
        req.flash('error', 'Cannot find campground')
        return res.redirect('/campgrounds')
    }
    res.render('campgrounds/edit', { campground })
}))


app.get('/new', catchAsync(async (req, res) => {
    res.render('campgrounds/new')
}))

app.post('/new', validateCampground, catchAsync(async (req, res, next) => {

    const c = new Campground(req.body);
    await c.save();
    req.flash('success', 'Successfully made a new campground')
    res.redirect(`/campgrounds/${c.id}`)
}))


app.delete('/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    if (!campground) {
        req.flash('error', 'Cannot find campground')
        return res.redirect('/campgrounds')
    }
    await Campground.findByIdAndDelete(id)
    res.redirect(`/campgrounds`)
}))

app.get('/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id).populate('reviews')
    if (!campground) {
        req.flash('error', 'Cannot find campground')
        return res.redirect('/campgrounds')
    }
    res.render('campgrounds/show', {campground})
}))


app.get('/', catchAsync(async (req, res) => {
    const campgrounds = await Campground.find()
    res.render('campgrounds/index', { campgrounds })
}))



module.exports = app;