const express = require('express')
const app = express()
const morgan = require('morgan')

const AppError = require('./AppError')

app.use(morgan('tiny'));


app.use((req,res, next)=>{
    req.requestTime = Date.now()
    console.log(req.method, req.path);
    next()
})

app.use('/dogs', (req,res,next)=>{
    console.log("I LOVE DOGS!!!");
    next()
})

const verifyPassword = (req,res,next)=>{
    const {password} = req.query
    if(password === 'chickennugget'){
        next()
    }
    throw new AppError('Password required', 401)
    // res.status(401)
    // throw new Error('Password required')
}

app.get('/error', (req,res)=>{
    chicken.fly()
})

app.get('/secret', verifyPassword, (req,res)=>{
    res.send("There is no secret 😜")
})


app.get('/admin', (req,res)=>{
    throw new AppError('You are not an Admin', 403)
})

app.get('/', (req,res)=>{
    res.send("Hello There")
})



app.use((req,res)=>{
    res.status(404).send('NOT FOUND')
})

app.use((err,req,res,next)=>{
    // console.log('*****************************************');
    // console.log('******************ERROR******************');
    // console.log('*****************************************');
    // console.log(err);
    // next()
    const {status=500, message="Something went Wrong"} = err;
    res.status(status).send(message)
})

app.listen(3000, (req,res)=>{
    console.log("Listening on port 3000");
})