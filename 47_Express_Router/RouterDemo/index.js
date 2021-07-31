const express = require('express')
const app = express();

const shelterRoutes = require('./routes/shelters')
const dogRoutes = require('./routes/dogs')
const adminRoutes = require('./routes/admin')


app.use('/admin', adminRoutes)
app.use('/dogs', dogRoutes)
app.use('/shelters', shelterRoutes)


app.get('/', (req,res)=>{
    res.send('asdjhaskldjaslkdjaskl')
})

app.listen(3000, ()=>{
    console.log("Listening on port 3000")
})