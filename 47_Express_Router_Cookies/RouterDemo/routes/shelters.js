const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.send("CREATING SHELTERS")
})

router.get('/', (req, res) => {
    res.send("ALL SHELTERS")
})

router.get('/:id', (req, res) => {
    res.send('viewing one shelter')
})

router.get('/:id/edit', (req, res) => {
    res.send('Editing one shelter')
})

module.exports = router;