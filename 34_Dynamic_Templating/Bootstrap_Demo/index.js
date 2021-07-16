const express = require('express')
const app = express()
const path = require('path')
const redditData = require('./data.json')

app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data === undefined)
        res.render('notfound', { subreddit })
    else
        res.render('subreddit', { ...data })

})

app.get('/', (req,res)=>{
    res.send('hello there')
})


app.listen(3000, ()=>{
    console.log("Listening on port 3000!");
})