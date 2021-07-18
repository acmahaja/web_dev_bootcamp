const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/YelpCamp', { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB YelpCamp')
    })
    .catch((e) => {
        console.log("ERROR:");
        console.log(e);
    })

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const Campground = new require('./models/campground');



app.put('/campgrounds/:id/edit', async (req,res)=>{
    const {id} = req.params;
    await Campground.findByIdAndUpdate(id, req.body );
    console.log(id);
    res.redirect(`/campgrounds/${id}`)
})

app.get('/campgrounds/:id/edit', async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id)

    res.render('campgrounds/edit', { campground })})


app.get('/campgrounds/new', async (req,res)=>{
    res.render('campgrounds/new')
})

app.post('/campgrounds/new', async (req, res) => {
    
    const c = new Campground(req.body);
    await c.save();
    console.log(req.body)
    res.redirect(`/campgrounds/${c.id}`)
})


app.delete('/campgrounds/:id', async (req, res) => {
    // const campgrounds = Campground.findById({})
    const { id } = req.params;
    await Campground.findByIdAndDelete(id)

    res.redirect(`/campgrounds`)
})

app.get('/campgrounds/:id', async (req, res) => {
    // const campgrounds = Campground.findById({})
    const {id} = req.params;
    const campground = await Campground.findById(id)

    res.render('campgrounds/show', { campground })
})


app.get('/campgrounds', async (req, res) => {
    // const campgrounds = Campground.findById({})
    const campgrounds = await Campground.find()
    res.render('campgrounds/index', {campgrounds})
})

app.get('/makecampground', async(req, res) => {
    const camp = new Campground({title: 'My Backyard', description: 'cheap camping'})
    await camp.save();
    res.send(camp)
})


app.get('/', (req,res)=>{
    // res.send('Welcome to YelpCamp')
    res.render('home')
})


app.listen(3000, ()=>{
    console.log("LISTENING ON PORT 3000")
})