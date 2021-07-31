const express = require('express')
const router = express.Router();

router.get('', (req,res)=>{
    res.send('ALL SHELTERS')
})

router.post('/new', (req,res)=>{
    res.send('Post created new shelters')
})

router.get('/new', (req, res) => {
    res.send('Get created new shelters')
})


router.get('/:id', (req, res) => {
    res.send('Viewing Shelter: ' + req.params.id)
})

router.get('/:id/edit', (req, res) => {
    res.send('Editing Shelter: ' + req.params.id + ' editing')

})

module.exports = router;