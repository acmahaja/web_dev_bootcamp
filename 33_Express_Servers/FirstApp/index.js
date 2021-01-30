const express = require("express");
const app = express();

// app.use((request, response) => {
//     console.log("We got a new request");
//     response.send("<h1> HALLLO </h1>");
// })

// cats =>  'meow'
// dogs =>  'woof'
// / =>     'welcome to the homepage'


app.get('/', (req, res) => {
    console.log("HOME REQUEST");
    res.send('HOME PAGE!!!')
})

app.get('/r/:subreddit', (req, res) => {
    const subreddit = req.params.subreddit;
    res.send(`<h1>Browsing the subreddit ${subreddit} </h1>`)
})

app.get('/r/:subreddit/comment/:postID', (req, res) => {
    const { subreddit, postID } = req.params;
    res.send(`<h1>Browsing the subreddit ${subreddit} </h1> <p>View post w/id: ${postID}</p>`)
})


app.post('/cats', (req, res) => {
    console.log("CAT POST REQUEST");
    res.send('Different from a guest request')
})

app.get('/cats', (req, res) => {
    console.log("CAT REQUEST");
    res.send('MEOW!!')
})

app.get('/dogs', (req, res) => {
    console.log("DOG REQUEST");
    res.send('WOOF!!')
})

app.get('/search', (req, res) => {
    console.log(req.query);
    const { q } = req.query;
    if (!q) {
        res.send(`<h1>NOTHING FOUND IF I SEE NOTHING</h1>`)
    } else {
        res.send(`<h1>Search results for ${q}</h1>`)

    }
})


app.get('*', (req, res) => {
    console.log("INVALID PATH");
    res.send('INVALID PATH')
})


app.listen(8080, () => {
    console.log("Listening on port 8080")
});