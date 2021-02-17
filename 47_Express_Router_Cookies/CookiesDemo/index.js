const express = require('express');
const app = express();

const cookieParser = require('cookie-parser')
app.use(cookieParser('thisismysecret'));

app.get('/greet', (req, res) => {
    const { name = 'No-name' } = req.cookies;
    console.log(name);
    res.send("HEY THERE " + name);
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true });
    res.send('OK SIGNED YOUR FRUIT!')
})

app.get('/verifyfruit', (req, res) => {
    console.log(req.signedCookies);
    console.log(req.cookies);
    res.send(req.signedCookies);
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'steive chicken');
    res.cookie('animal', 'harlequin shrimp');
    res.send('OK SENT YOU A COOKIE')
})



app.listen(3000, () => {
    console.log("SERVING 3000")
})