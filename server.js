// Requires
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('./src/config');

// Express instance
const app = express();

// Built in express parser
app.use(express.json());
app.use(cors())

// DB Config
const db = config['mongoURI'];

// Connect to DB (Mongo)
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true
	})
	.then(() => console.log('MongoDB Connected...'))
	.catch(err => console.log(err));

// Use Routes
app.use('/api/books', require('./src/routes/books'));
app.use('/api/users', require('./src/routes/users'));
app.use('/api/auth', require('./src/routes/auth'));

// Port for DB
const port = process.env.PORT || 4000;
// app.listen(port, () => console.log(`Server started on ${port}`));

app.use(express.static(path.join(__dirname, '../..', 'build')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.listen(port, function(){
  console.log("Server port ", port);
});
module.exports = app;