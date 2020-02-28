// Requires
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const books = require('./routes/api/books');

// Express instance
const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to DB (Mongo)
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/books', books);

// Port for DB
const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`Server started on ${port}`));

app.use(express.static(path.join(__dirname, '../..', 'build')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// app.get('/*', (req, res, next) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

module.exports = app;