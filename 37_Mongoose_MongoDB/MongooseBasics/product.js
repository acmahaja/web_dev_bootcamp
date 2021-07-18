const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection Open!!!")
    })
    .catch(() => {
        console.log("ERROR:");
        console.log(err);
    })




const productSchema = new mongoose.Schema({
    name: {type: String, required: true, maxlength: 20},
    price: { type: Number, required: true, min: [0, 'Price must be positive ya dodo!'] },
    onSale:{type: Boolean, default: false},
    categories: { type: [String], default: ['cycling'] },
    qty:{
        online:{
            type:Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
    
})

productSchema.statics.firesale = function () {
    return this.updateMany({}, {onSale: true, price:0})
}


productSchema.methods.greet = function () {
    console.log("Hello there 🧙");
    console.log(`- from ${JSON.stringify(this.name)}`);
    console.log(this);

}

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale
    return this.save()
}

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Some Helment'});
    foundProduct.greet();
    foundProduct.toggleOnSale()
    foundProduct.greet();
}


const Product = mongoose.model('Movie', productSchema);

const helmet = new Product({name: 'Some Helment', price: 2})
helmet.save()
findProduct();

Product.firesale().then(res => console.log(res))

// helmet.save()
//     .then(data=>console.log("IT WORKED\n" + data))
//     .catch(e => console.log("OH NO ERROR!\n" + JSON.stringify(e.errors.name.properties.message)))

// const bike = new Product({name: 'Mountain Bike ', price: 599, color:'red', categories: ['Cycling', 'Mountain']})
// bike.save()
//     .then(data=>console.log("IT WORKED\n" + data))
//     .catch(e => console.log("OH NO ERROR!\n" + JSON.stringify(e.errors.name.properties.message)))

// Product.findOneAndUpdate({ name: 'Mountain Bike'}, {price: 9, size: 'M'},{new:true, runValidators: true} )
//     .then(data=>console.log("IT WORKED\n" + data))
//     .catch(e => console.log("OH NO ERROR!\n" + JSON.stringify(e)))
