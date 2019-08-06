const express = require('express');
const router = express.Router();
// MODEL
const Employee = require('../models/employeeModel');

// index
router.get('/', (req, res) => {
  Employee.find({}, (error, allEmployees) => {
    res.render('index.ejs', {
      employees: allEmployees
    });
  });
});
// new
router.get('/new', (req, res) => {
  res.render('new.ejs');
});

// edit
router.get('/:id/edit', (req, res) => {
  Employee.findById(req.params.id, (err, foundEmployee) => {
    //find the employee
    // console.log(foundEmployee);
    res.render('edit.ejs', {
      employee: foundEmployee, //pass in found employee
      index: req.params.id
    });
  });
});
// show
router.get('/:id', (req, res) => {
  Employee.findById(req.params.id, (err, foundEmployee) => {
    res.render('show.ejs', {
      employee: foundEmployee
    });
  });
});
// create
router.post('/', (req, res) => {
  Employee.create(req.body, (error, createdEmployee) => {
    res.redirect('/employees');
  });
});

// put for the edit
router.put('/:id', (req, res) => {
  // add logic to edit employee here

  Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    (err, updatedEmployee) => {
      res.redirect('/employees');
    }
  );
});

// DELETE
router.delete('/:id', (req, res) => {
  Employee.findByIdAndRemove(req.params.id, (err, deletedEmployee) => {
    res.redirect('/employees'); //redirect back to employees index
  });
});

module.exports = router;
