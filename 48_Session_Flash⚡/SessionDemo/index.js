const express = require('express')
const app = express()
const session = require('express-session')

const sessionOptions = {secret: 'password', resave: false, saveUninitalized: false }
app.use(session(sessionOptions))

app.get('/viewcount', (req,res)=>{
    if(req.session.count)
        req.session.count+=1;
    else
        req.session.count = 1;

    res.send(`YOU HAVE VIEWED THIS PAGE ${req.session.count} TIMES`)
})

app.get('/register', (req,res)=>{
    const {username='Anonymous'} = req.query;
    req.session.username = username;
    res.redirect('/greet')
})

app.get('/greet', (req, res) => {
    const { username = 'Anonymous' } = req.session;
    res.send(`Welcome ${username}`)
})


app.listen(3000, ()=>{
    console.log('listening on port 3000')
})