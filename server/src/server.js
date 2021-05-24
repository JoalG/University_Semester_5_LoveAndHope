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

const userRoute = require('./routes/users');
const formRoute = require('./routes/forms');
const orderRoute = require('./routes/orders');
const productRoute = require('./routes/products');
const trayRoute = require('./routes/trays');

app.use('/Users', userRoute);
app.use('/Forms', formRoute);
app.use('/Orders', orderRoute);
app.use('/Products', productRoute);
app.use('/Trays', trayRoute);

mongoose.connect(
    process.env.DB_CONNECTION_LAH, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    () => {
        console.log('connected to DB!!!');
    }
);

// server listing in  port 3000
app.listen(3000);