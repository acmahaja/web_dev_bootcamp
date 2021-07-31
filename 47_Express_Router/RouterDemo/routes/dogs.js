const express = require('express')
const router = express.Router();


router.get('/', (req, res) => {
    res.send('ALL DOGS')
})

router.post('/new', (req, res) => {
    res.send('Post created new dog')
})

router.get('/new', (req, res) => {
    res.send('Get created new dog')
})


router.get('/:id', (req, res) => {
    res.send('Viewing dog: ' + req.params.id)
})

router.get('/:id/edit', (req, res) => {
    res.send('Editing dog: ' + req.params.id + ' editing')

})

module.exports = router