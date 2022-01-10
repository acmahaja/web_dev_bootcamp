const express = require('express');
const app = express();
const mongoose = require('mongoose')
const path = require('path')
const methodOverride = require('method-override')
const Product = require('./models/product')
const Farm = require('./models/farm')
const AppError = require('./AppError')

app.use(express.urlencoded({ extended: true }))
// app.use(express.json());
app.use(methodOverride('_method'));


mongoose.connect('mongodb://localhost:27017/farmStand2', { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => {
        console.log(`CONNECTED to FARMSTAND!`)
    })
    .catch(err => console.log("ERROR:\n", err))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e))
    }
}

app.post('/farms/new', wrapAsync(async (req,res,next)=>{
    const {name, city, email} = req.body;
    const newFarm = new Farm({ name, city, email });
    await newFarm.save().then((res) => console.log(res));
    res.send(newFarm);
}))

app.get('/farms/:id/products/new', wrapAsync(async (req, res, next) => {
    res.render('products/new')
}))

app.get('/farms/new', (req,res)=>{
    res.render('farms/new')
})

app.get('/farms/:id', wrapAsync(async (req,res,next)=>{
    const { id } = req.params;
    const farm = await Farm.findById(id);
    if (!farm) {
        throw new AppError('Product Not Found', 404);
    }
    res.render('farms/show', { farm })
}))

app.get('/farms', wrapAsync(async(req, res) => {
    const farms = await Farm.find({})
    res.render('farms/index', {farms})
}))




app.post('/products/new', async (req, res, next) => {
    try{
        const name = req.body.name;
        const price = req.body.price;
        const category = req.body.category;
        const newProduct = new Product({ name, price, category });
        await newProduct.save().then((res) => console.log(res));
        res.redirect('/products');
    } catch (e){
        next(e)
    }
})

app.get('/products/new', (req, res) => {
    // throw new AppError('NOT ALLOWED', 401)
    res.render('products/new')
})


app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if(!product){
            throw new AppError('Product not found!', 404);
        }
        res.render('products/edit', { product });
    } catch(e){
        next(e)
    }
}))

app.put('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;

        const name = req.body.name;
        const price = req.body.price;
        const category = req.body.category;

        await Product.findByIdAndUpdate(id, { name, price, category });
        res.redirect(`/products/${req.params.id}`);
}))

app.delete('/products/:id', wrapAsync(async (req, res) => {

    const { id } = req.params;
    await Product.findByIdAndDelete(id)
    res.redirect('/products')
}))


app.get('/products/:id', wrapAsync( async (req, res, next) => {
        const { id } = req.params;
        const product = await Product.findById(id);
        if(!product){
            throw new AppError('Product Not Found', 404);
        }
        res.render('products/show', { product })

}))


app.get('/products', wrapAsync(async (req, res, next) => {
        const { category } = req.query;
        let products = null;
        if (category) {
            products = await Product.find({ category: category });
        } else {
            products = await Product.find({});
        }
        
        res.render('products/index', { products })
}))

app.get('/broken', (req,res)=>{
    something.broke()
})

app.use((err, req,res, next)=>{
    const {status = 500, message = 'Something went wrong'} = err;
    console.log("*******************************************");
    console.log("*******************ERROR******f*************");
    console.log("*******************************************");
    console.log(status);
    console.log(message);


    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log("Live on http://localhost:3000")
})