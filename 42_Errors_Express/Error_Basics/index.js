const express = require('express');
const app = express();
const morgan = require('morgan');

const AppError = require('./AppError')

app.use(morgan('use'));

app.use(morgan('dev'))
app.use((req,res,next)=>{
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

app.use('/dogs', (req,res, next)=>{
    console.log("I LOVE DOGS!!!");
    next()
})

const verifyPassword = (req,res,next)=>{
    const {password} = req.query;
    if(password==='chickennugget')
        next()
    // res.send("PASSWORD NEEDED!")
    // res.status(401)
    // throw new Error('Password Required')
    throw new AppError('Password Required', 401)

}

app.get('/', (req,res)=>{
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('HOME PAGE!')
})

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('WOOF WOOF!')
})

app.get('/error', (req,res)=>{
    chicken.fly()
})

app.get('/secret', verifyPassword,(req, res) => {
    res.send('I HAVE A SECRET I CANT TELL! 😈')
})

// app.use((err,req,res,next)=>{
//     console.log(`***************************************`);
//     console.log(`*****************ERROR*****************`);
//     console.log(`***************************************`);
//     // res.status(500).send("OH BOY SOMETHING BROKE :/")
//     // console.log(err);

//     next(err)
// })

app.get('/admin', (req,res)=>{
    throw new AppError('You are not an admin >:(', 403)
})

app.use((err,req,res,next)=>{
    const {status, message = 'Something broke :/'} = err;
    res.status(status).send(message)
})


app.use((req,res)=>{
    res.send(404).send('NOT FOUND!')
})

app.listen(3000, () => {
    console.log('App is running on http://localhost:3000')
})