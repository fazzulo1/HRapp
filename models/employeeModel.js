const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    dob: Number,
    img: String,
    address: String,
    phone: String,
    email: String,
    department: String,
    supervisor: String,
    job: String,
    job_description: String,
    office: String,
    salary: Number,
    bonus: Number,
    vacation: Number,
    skills: [String]
  },
  { timestamps: true }
);

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
