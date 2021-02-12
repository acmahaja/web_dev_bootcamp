const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const Campground = require('./models/campground')
const ejsMate = require('ejs-mate')
const app = express();


app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

mongoose.connect('mongodb://localhost:27017/yelp-camp', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(() => {
    console.log("Mongo Connection Open");
}).catch(err => {
    console.log("Mongo Connection Error");
    console.log(err);
});


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))


app.get('/campgrounds', async(req, res) => {
    const camps = await Campground.find({});
    res.render('campgrounds/index', { camps });

})


app.get('/campgrounds/new', async(req, res) => {
    res.render('campgrounds/new');

})


app.put('/campgrounds/:id', async(req, res) => {
    await Campground.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/campgrounds/${req.params.id}`);
})


app.delete('/campgrounds/:id', async(req, res) => {
    await Campground.findByIdAndDelete(req.params.id);
    res.redirect('/campgrounds');
});

app.get('/campgrounds/:id/edit', async(req, res) => {
    const camp = await Campground.findById(req.params.id);
    res.render('campgrounds/edit', { camp })

})

app.get('/campgrounds/:id', async(req, res) => {
    const camp = await Campground.findById(req.params.id);
    res.render('campgrounds/show', { camp });

})

app.post('/campgrounds', async(req, res) => {
    console.log(req.body);
    const camp = new Campground(req.body)
    await camp.save();
    res.redirect('/campgrounds');
})

app.get('/campgrounds', async(req, res) => {
    const camps = await Campground.find({});
    res.render('campgrounds/index', { camps });

})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})