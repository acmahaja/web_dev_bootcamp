const express = require('express')
const app = express();
const path = require('path')
const redditData = require('./data.json')

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ];
    res.render('cats', { cats })
})

app.get('/rand', (req, res) => {
    const number = Math.floor(Math.random() * 10)
    res.render('random', { number })
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    res.render('subreddit', { data })
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})