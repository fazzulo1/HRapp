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

// employees.create();

// Routes
//localhost:3000
// app.get('/employees', (req, res) => {
//   res.render('index.ejs', { employees: employees });
// });

// add a new hire
// app.get('/employees/new', (req, res) => {
//   res.render('new.ejs');
// });
//add show route
// app.get('/employees/:index', (req, res) => {
//   const currentEmployee = employees[req.params.index];
//   res.render('show.ejs', {
//     employee: currentEmployee
//   });
// });
// Edit
// app.get('/employees/:index/edit', (req, res) => {
//   const currentEmployee = employees[req.params.index];
//   res.render('edit.ejs', {
//     employee: currentEmployee,
//     index: req.params.index
//   });
// });
// create: add a hired employee
// app.post('/employees', (req, res) => {
//   employees.push(req.body);
//   res.redirect('/employees');
// });
// delete employee

// app.delete('/employees/:index', (req, res) => {
//   employees.splice(req.params.index, 1);
//   res.redirect('/employees');
// });

// Update
// app.put('/employees/:index', (req, res) => {
//   employees[req.params.index] = req.body;
//   res.redirect('/employees');
// });

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
