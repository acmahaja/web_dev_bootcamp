const express = require('express');
const app = express();
const mongoose = require('mongoose')
const path = require('path')
const methodOverride = require('method-override')
const Product = require('./models/product')

app.use(express.urlencoded({ extended: true }))
// app.use(express.json());
app.use(methodOverride('_method'));


mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res)=>{
        console.log(`CONNECTED to FARMSTAND!`)
    })
    .catch(err => console.log("ERROR:\n",err ))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')



app.post('/products/new', async (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const category = req.body.category;
    const newProduct = new Product({name, price, category});
    await newProduct.save().then((res) => console.log(res)) ;
    res.redirect('/products');
})

app.get('/products/new', async (req, res) => {
    res.render('products/new')
})


app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product});
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;

    const name = req.body.name;
    const price = req.body.price;
    const category = req.body.category;

    await Product.findByIdAndUpdate(id, {name, price, category});
    res.redirect(`/products/${req.params.id}`);
})

app.delete('/products/:id', async (req,res)=>{
    const { id } = req.params;
    await Product.findByIdAndDelete(id)
    res.redirect('/products')
})

app.get('/products/:id',async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/show', { product })
})


app.get('/products', async(req,res)=>{
    const {category} = req.query;
    let products = null;
    if(category){
        products = await Product.find({ category: category });
    } else {
        products = await Product.find({});
    }
    res.render('products/index', {products})
})

app.listen(3000, ()=>{
    console.log("Listening on port 3000")
})