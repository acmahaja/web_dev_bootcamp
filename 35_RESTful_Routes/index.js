const express = require('express')
const app = express()
const path = require('path');
const { v4: uuid } = require('uuid');

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.json());



let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    },
]




app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})


app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c=> c.id === id)
    res.render('comments/show', { comment })

})

app.get('/comments', (req,res)=>{
    res.render('comments/index', {comments})
})

app.post('/comments', (req, res) => {
    const {username, comment} = req.body;
    comments.push({ id: uuid(),username, comment})
    res.redirect('/comments')
})



app.get('/tacos', (req,res)=>{
    console.log("GET /tacos request");
    res.send("GET /tacos request")
})

app.post('/tacos', (req, res) => {
    console.log("POST /tacos request");
    console.log("BODY: " + JSON.stringify(req.body));
    const {meat,qty} = req.body;
    res.send(`OK, here are your ${meat} ${qty} tacos`)
})

app.patch('/comments/:id', (req,res)=>{
    const {id} = req.params;
    const {comment} = req.body;
    const foundComment = comments.find(c=> c.id === id);
    foundComment.comment = comment;
    res.redirect('/comments')
})


app.get('/', (req,res)=>{
    res.render('getpost')
})

app.listen(8080, ()=>{
    console.log("Listening on 8080");
})