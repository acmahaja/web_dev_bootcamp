const express = require('express');
const app = express();

const morgan = require('morgan');

// app.use(express.urlencoded())
// app.use(morgan('tiny'))
// app.use(morgan('dev'))
// app.use(morgan('common'))

// app.use((req,res, next)=>{
//     // res.send('HICKACED BY MY APP.USE 😈')
//     console.log("This is my first middleware");
//     return next()
// })

// app.use((req, res, next) => {
//     console.log("This is my second middleware");
//     return next()
//     console.log("This is my third middleware");

// })

// app.use(morgan('common'))
app.use(morgan('tiny'))

app.use((req,res,next)=>{
    // req.method = 'GET'
    req.requestTime = Date.now()
    console.log(req.method, req.path);
    next()
})

app.use('/dogs', (req,res,next)=>{
    console.log("I LOVE DOGS!!!");
    next();
})

// app.use((req, res, next)=>{
//     const {password}=req.query;
//     if (password === 'chickennugget'){
//         next();
//     }
//     res.send('YOU NEED THE PASSWORD!!!')
// })

const verifyPassword = ((req,res,next)=>{
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    res.send('YOU NEED THE PASSWORD!!!')})

app.get('/secret', verifyPassword ,(req,res)=>{
    console.log(`Request DATE:${req.requestTime}`);
    res.send("I HAVE A SECRET TO TELL YOU 😜")
})

app.get('/dogs', verifyPassword, (req, res) => {
    res.send('WOOOF WOOF!')
})

app.get('/', (req, res) => {

    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('HOME PAGE!')
})

app.use((req,res)=>{
    res.status(404).send('NOT FOUND!')
})

app.listen(3000, ()=>{
    console.log('App is running on localhost:3000');
})