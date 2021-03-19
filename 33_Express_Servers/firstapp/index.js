const express = require("express")
const app = express();
console.dir(app);


// app.use((req, res) => {
//     console.log("We got a new request!");
//     // console.dir(req);
//     // res.send("We got your request!");
//     res.send("<h1>This is my webpage!</h1>")
// })

app.get('/search', (req, res) => {
    console.log(req.query);
    const { q, color } = req.query
    if (!q) {
        res.send("NOTHING FOUND IF NOTHING SEARCHED")
    }
    res.send(q, color)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    console.log(req.params);
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing PostID: ${postId} the ${subreddit} subreddit </h1>`)
})


app.get('/r/:subreddit', (req, res) => {
    console.log(req.params);
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit </h1>`)
})


app.get('/cats', (req, res) => {
    console.log("Cat Request🐱");
    res.send("Meow!");
})

app.post('/cats', (req, res) => {
    console.log("Cat Post Request");
    res.send("This is a post cat request!🐱‍🐉");
})

app.get('/dogs', (req, res) => {
    console.log("Dog Request");
    res.send("Woof!");
})

app.get('/', (req, res) => {
    res.send("Welcome to my webpage!");
})


app.listen(8080, () => {
    console.log("Listening on Port 8080");
})