const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log('MONGO CONNECTION OPEN')
    })
    .catch(err =>{
        console.log('OH NO MONGO CONNECTION ERROR!!!');
        console.log(err);
    })

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses:[
        {
            _id: { id: false }, 
            street: String,
            city: String,
            state: String,
            country: {
                type: String,
                required: true
            }
        }
    ]
});



const User = mongoose.model('User', userSchema);

const makeUser = async ()=>{
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })
    u.addresses.push({
        street: '123 Sesame St.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    })
    await u.save().then((result)=> console.log(result))
}

const addAddress = async (id) =>{
    const user = await User.findById(id);
    user.addresses.push({
        street: '99 3rd St.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    })
    await user.save().then((result) => console.log(result))
}


makeUser().then(()=>{
    addAddress('60fa4ed5b59adbce0f8d4dfd')
})