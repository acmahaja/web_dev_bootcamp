const express = require('express')
const app = express();

const morgan = require('morgan')

// app.use(()=>{
//     console.log("Heyy");
// })

// app.use(express.urlencoded())

app.use(morgan('tiny'));
app.use((req, res, next) => {
    // req.method = 'POST'
    req.requestTime = Date.now()
    console.log(req.method, req.path)
    next()
})

app.use('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS");
    next()
})

const verifyPassword = (req, res, next) => {
    // console.log("parms: " + JSON.stringify(req.query));
    const { password } = req.query
    if (password === 'chickennugget') {
        next()
    }
    res.send("You arent authenticated")
}

// app.use((req,res, next)=>{
//     console.log("MY FIRST MIDDLEWEAR");
//     next();
//     console.log("I can see this");
// })

// app.use((req, res, next) => {
//     console.log("MY SECOND MIDDLEWEAR");
//     return next();
// })

// app.use((req, res, next) => {
//     console.log("MY THIRD MIDDLEWEAR");
//     return next();
// })

app.get('/', (req, res) => {
    console.log(`Request Time: ${Date(req.requestTime)}`);
    res.send('Home Page')
})

app.get('/dogs', verifyPassword, (req, res) => {
    res.send('Dog Page')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send("THERE IS NO SECRET HERE")
})

app.use((req, res) => {
    res.send('404 NOT FOUND')
})

app.listen(3000, () => {
    console.log("App is running on localhost:3000");
})