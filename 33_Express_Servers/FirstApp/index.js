const express = require('express')
const app = express()

// console.dir(app)

// app.use((req,res)=>{
//     console.log("We got a new request!");
//     console.log(req);
//     res.send('<h1>This is my webpage</h1>')
// })

app.get('/cats', (req,res) => {
    // console.log('CAT REQUESTS!');
    res.send('MEOW!!')
})

app.get('/r/:subreddit', (req,res)=>{
    // console.log(req.params);
    const {subreddit} = req.params
    // res.send("This is a subreddit: " + subreddit)
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    // console.log(req.params);
    const { subreddit, postId } = req.params
    // res.send("This is a subreddit: " + subreddit)
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1> <p>Current Post ID ${postId}</p>`)
})


app.get('/dogs', (req, res) => {
    // console.log('CAT REQUESTS!');
    res.send('WOOOF!!')
})

app.post('/cats', (req,res)=>{
    res.send('POST REQUEST TO /cats!!!!!')
})

app.get('/search', (req,res)=>{
    const {q} = req.query;
    if(!q){
        res.send('Nothing Found!')
    }
    res.send(`<h1>Search Results for: ${q}</h1>`)
})





app.get('*', (req, res) => {
    res.send('I dont know that path')
})

app.listen(8080, ()=> {
    console.log("LISTENING ON PORT 8080"); 
}) 