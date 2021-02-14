const express = require('express');
const app = express();

const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const Product = require('./models/product');
const AppError = require('./AppError')


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))


mongoose.connect('mongodb://localhost:27017/farmStand2', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo Connection Open");
    }).catch(err => {
        console.log("Mongo Connection Error");
        console.log(err);
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.post('/products/new', async(req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    res.redirect(`/products/${newProduct.id}`)
})

app.get('/products/new', (req, res) => {
    res.render('products/new')
})

app.put('/products/:id', async(req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${req.params.id}`);
})

app.delete('/products/:id', async(req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect(`/products`);
})


app.get('/products/:id/edit', async(req, res) => {
    const product = await Product.findById(req.params.id)
    res.render('products/edit', { product })
})

app.get('/products/:id', async(req, res) => {
    const { id } = req.params;
    const product = await Product.findById(req.params.id)
    if (!product) {
        throw new AppError('Product Not Found', 404)
    }

    res.render('products/show', { product })
})


app.get('/products', async(req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category });
        res.render('products/index', { products, category })

    } else {
        const products = await Product.find({})
        res.render('products/index', { products, category: 'All' })
    }
})

app.get('/', async(req, res) => {
    res.redirect('http://localhost:3000/products')
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err;
    res.status(status).send(message);
})


app.listen(3000, () => console.log("App is Listening on Port 3000"))