const express = require('express');
const app = express();
const morgan = require('morgan');

const AppError = require('./AppError')

app.use(morgan('dev'));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next()
});

app.use('/dogs', (req, res, next) => {
    console.log("I like doogs");
    next();
});



const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next()
    }
    // res.send('Sorry you need a password')
    res.status(401)
    throw new AppError('Password Required!', 401)
};

// app.use((req, res, next) => {
//     const { password } = req.query;
//     if (password === 'chickennugget') {
//         next()
//     }
//     res.send('Sorry you need a password')
//     next();
// })

app.get('/error', (req, res) => {
    chicken.fly();
})

app.get('/secret', verifyPassword, (req, res) => {

    res.send('SSSHHHH!')
});

app.get('/admin', (req, res) => {
    throw new AppError('You arent not an Admin!', 403)
})

// app.use((req, res, next) => {
//     req.requestTime = Date.now();
//     console.log('I am Middlewear!');
//     return next();
//     console.log('I am the secret fourth Middlewear!');

// });

// app.use((req, res, next) => {
//     console.log('I am another Middlewear!');
//     return next();

// });

// app.use((req, res, next) => {
//     console.log('I am the third Middlewear!');
//     return next();

// });


app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);

    res.send('WOOF WOOF!')
});

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('HOME PAGE!')
});


app.use((req, res) => {
    res.status(404).send('NOT FOUND 404')
})


app.use((err, req, res, next) => {
    // console.log('**************************************');
    // console.log('**************ERROR!!!!***************');
    // console.log('**************************************');
    // console.log(err);
    // next(err);

    // const { status } = err;
    // res.status(status).send('Errrorrrr!!!')

    const { status = 500, message = 'Something went Wrong' } = err;
    res.status(status).send(message)
})


app.listen(3000, () => {
    console.log('App is running on localhost:3000');
})