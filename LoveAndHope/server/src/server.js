const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

// Middleware
app.use(cors());

app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());


// imports ROUTES
//const postRoute = require ('./routes/posts');
const userRoute = require('./routes/users');
//const schemaRoute = require('./routes/schemas');

//app.use('/posts', postRoute);
app.use('/Users', userRoute);
//app.use('/Schemas', schemaRoute);

mongoose.connect(
    process.env.DB_CONNECTION_U, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    () => {
        console.log('connected to DB!!!');
    }
);

// server listing in  port 3000
app.listen(3000);