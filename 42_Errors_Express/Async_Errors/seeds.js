const mongoose = require('mongoose')

const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand2', { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => {
        console.log("CONNECTED!\n")
    })
    .catch(err => console.log("ERROR:\n", err))

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })

// p.save().then(data => console.log(data))
//         .catch(err => console.log(err))

const seedProducts = [
    {name: 'Fairy Eggplant', price: 1.00, category: 'vegetable'},
    {name: 'Organic Goddess Melon', price: 4.99, category: 'fruit'},
    {name: 'Organic Mini seedless Watermelon', price: 3.99, category: 'fruit'},
    { name: 'Organic Celery', price: 1.50, category: 'vegetable'},
    { name: 'Chocolate Milk', price: 2.69, category: 'dairy' },
]

Product.insertMany(seedProducts)
    .then((val)=> console.log(val))
    .catch(err => console.log("ERROR:\n", err))
