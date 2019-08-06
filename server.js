//Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const employeesController = require('./controllers/employeeController');

//Port
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(__dirname + 'public'));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use('/employees', employeesController);

// How to connect to the database either via heroku or locally
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/hrapp';
// Connect to Mongo
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, () => {
  console.log('connected to mongo database');
});
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});

//Listener
app.listen(PORT, () => console.log('Listening on port:', PORT));
