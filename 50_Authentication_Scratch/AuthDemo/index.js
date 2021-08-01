const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

const mongoose = require('mongoose');
const session = require('express-session')

mongoose.connect('mongodb://localhost:27017/authDemo', 
    { useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>{
            console.log("MONGOOSE CONNECTION OPEN!!!")
        });

const User = require('./models/user')

app.use(express.urlencoded({ extended:true }))
app.use(session({ secret: 'password', saveUninitialized: true, resave: false}))

app.set('view engine', 'ejs')
app.set('views', 'views')

const validateSession = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    next()
}

app.post('/logout', (req,res)=>{
    req.session.user_id = null;
    req.session.destroy()
    res.redirect('/login')
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const currUser = await User.findAndValidate( username, password )
    const validPassword = await bcrypt.compare(password, currUser.password)
    if(!validPassword)
        res.redirect('/login')

    req.session.user_id = currUser._id;
    // res.send(`WELCOME ${currUser.username}`)
    res.redirect('/secret')

})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/register', async (req, res) => {
    const { username, password} = req.body;
    const hash = await bcrypt.hash(password, 12)
    const user = new User({username:username, password: hash})
    await user.save();
    req.session.user_id = user._id;

    res.redirect('/secret')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/secret', validateSession, (req,res)=>{
    console.log(req.session.user_id)
    res.render('secret')
    // res.send('This is secret yous hould not be able to see this without permission')
})

app.get('/topsecret', validateSession, (req, res) => {
    res.send('topsecret page')
    // res.send('This is secret yous hould not be able to see this without permission')
})


app.get('/', (req,res)=>{
    res.send('Welcome to Auth Demo')
})


app.listen(3000, ()=>{
    console.log('Listening on port http://localhost:3000')
})