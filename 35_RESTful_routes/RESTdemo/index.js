const express = require('express');
const methodOverride = require('method-override');
const app = express();
const path = require('path')
const { v4: uuid } = require('uuid');



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

let orders = [{
        id: uuid(),
        meat: 'chicken',
        quantity: Math.floor(Math.random() * 10) + 1,
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas a nihil dolores perspiciatis exercitationem vero ratione ut, quo enim corrupti obcaecati, repellendus eveniet molestias error blanditiis, aliquid amet eligendi.'
    },

    {
        id: uuid(),
        meat: 'beef',
        quantity: Math.floor(Math.random() * 10) + 1,
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas a nihil dolores perspiciatis exercitationem vero ratione ut, quo enim corrupti obcaecati, repellendus eveniet molestias error blanditiis, aliquid amet eligendi.'

    },

    {
        id: uuid(),
        meat: 'chicken',
        quantity: Math.floor(Math.random() * 10) + 1,
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas a nihil dolores perspiciatis exercitationem vero ratione ut, quo enim corrupti obcaecati, repellendus eveniet molestias error blanditiis, aliquid amet eligendi.'

    },

    {
        id: uuid(),
        meat: 'pork',
        quantity: Math.floor(Math.random() * 10) + 1,
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas a nihil dolores perspiciatis exercitationem vero ratione ut, quo enim corrupti obcaecati, repellendus eveniet molestias error blanditiis, aliquid amet eligendi.'

    },

    {
        id: uuid(),
        meat: 'beef',
        quantity: Math.floor(Math.random() * 10) + 1,
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas a nihil dolores perspiciatis exercitationem vero ratione ut, quo enim corrupti obcaecati, repellendus eveniet molestias error blanditiis, aliquid amet eligendi.'

    }
]



app.patch('/order/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const order = orders.find(c => c.id === id);
    order.comment = newCommentText;
    res.render('order/show', { order })
})

app.delete('/order/:id', (req, res) => {
    const { id } = req.params;
    orders = orders.filter(c => c.id !== id);
    res.redirect('/order');
})

app.get('/order/:id/edit', (req, res) => {
    const { id } = req.params;
    const order = orders.find(c => c.id === id);
    res.render('order/edit', { order })

})


app.get('/order/new', (req, res) => {
    res.render('order/new');
})

app.get('/order/:id', (req, res) => {
    const { id } = req.params;
    const order = orders.find(c => c.id === id);
    res.render('order/show', { order })
})



app.post('/order', (req, res) => {
    const { meat, quantity, comment } = req.body
    orders.push({ id: uuid(), meat, quantity, comment })
    res.redirect("/order")
})

app.get('/order', (req, res) => {
    res.render('order/index', { orders })
})


app.get('/tacos', (req, res) => {
    res.redirect('back')
        //res.send("GET /TACOS RESPONSE");
})

app.post('/tacos', (req, res) => {
    console.log(req.body);
    const { meat, number } = req.body;
    res.send(`OK, here are your ${number} ${meat} tacos`)

})

app.listen(3000, () => {
    console.log("ON PORT 3000");
})

// username
// text

// bob - hello!

//     GET / allcomments
// GET / all
// GET / showmeallcommentsnow

// V - used when creating or adding to a db
// POST / makecomment
// POST / newcomment

// GET / comments - list all comments
// POST / comments - Create a new comment
// GET / comments /:id - Get one comment(using ID)
// PATCH / comments /:id - Update one comment
// DELETE / comments /:id - Destroy one comment