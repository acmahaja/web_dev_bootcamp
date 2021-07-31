const express = require('express');
const app = express()

const cookieParser = require('cookie-parser')
app.use(cookieParser('thisismysecret'))


app.use((req,res,next)=>{
    console.log(req.cookies);
    next()
})

app.get('/greet', (req,res)=>{
    const {name = 'No-name'} = req.cookies

    res.send(`Hey There ${name}!`)
})

app.get('/setname', (req,res)=>{
    res.cookie('name', 'chicken')
    res.cookie('animal', 'harlequin shrimp')

    res.send('Ok sent you a cookie 🍪')
})

app.get('/getsignedcookie', (req,res)=>{
    res.cookie('fruit', 'grape',{signed:true})
    res.send('got a signed cookie :D')
})

app.get('/verifyfruit', (req,res)=>{
    console.log(req.cookies)
    console.log(req.signedCookies)

    res.send(req.signedCookies)
})
app.listen(3000, ()=>{
    console.log('Serving on port http://localhost:3000')
})