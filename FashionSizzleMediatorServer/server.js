var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var cors = require('cors');
var app = express();

const userRoute = require('./routes/userRoute');

//connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/fashionSizzle');


//on successful connection
mongoose.connection.on('connected', () => {
    console.log('Connected to mongodb!!');
});

//on error
mongoose.connection.on('error', (err) => {
    if (err) {
        console.log('Error in db is :' + err);
    }
});


//port no
const port = 5018;


//middleware
app.use(cors());
app.use(expressValidator());


//body-parser
app.use(bodyParser.json());


//routes
app.use('/user', userRoute);


app.listen(port, () => {
    console.log('server started at port number :' + port);
});
