const express = require('express')
const router = express.Router();


router.use(((req, res, next) => {
    if (req.query.isAdmin) {
        next()
    }
    res.send("SORRY NOT AN ADMIN")
}))

router.get('/topsecret', (req,res)=>{
    res.send('This is Top Secret')
})

router.get('/deleteeverything', (req, res) => {
    res.send('Deleting Everything!!!')
})


module.exports = router