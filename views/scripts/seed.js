const Employee = require('../../models/employeeModel');

const employeeData = [
  {
    name: 'Paul',
    lastname: 'Les',
    dob: '01-01-1978',
    img:
      'https://user-images.githubusercontent.com/51187016/62468842-067dd300-b765-11e9-90d6-82dcfd1e50fd.jpg',
    address: 'Stamford',
    phone: '203-111-1111',
    email: 'ceo@gmail.com',
    department: 'Management',
    supervisor: 'Chief Executive Officer',
    job: 'Chief Executive Officer',
    job_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias amet quos perferendis enim veniam, omnis quam totam animi voluptatum consectetur assumenda debitis qui rerum neque iste! Illo similique quaerat quo.',
    office: 'Stamford',
    salary: 200000,
    bonus: 50000,
    vacation: 15,
    skills: ['Front-end', 'Back-end']
  },
  {
    name: 'Ann',
    lastname: 'Smith',
    dob: '01-01-1988',
    img:
      'https://user-images.githubusercontent.com/51187016/62466787-28c12200-b760-11e9-9156-b1d3484ac0e8.jpeg',
    address: 'Norwalk',
    phone: '203-111-2222',
    email: 'as@gmail.com',
    department: 'Accounting',
    supervisor: 'Chief Financial Officer',
    job: 'Accounting Manager',
    job_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias amet quos perferendis enim veniam, omnis quam totam animi voluptatum consectetur assumenda debitis qui rerum neque iste! Illo similique quaerat quo.',
    office: 'Stamford',
    salary: 90000,
    bonus: 5000,
    vacation: 15,
    skills: ['CPA', 'CMA']
  },
  {
    name: 'John',
    lastname: 'Williams',
    dob: '01-01-1978',
    img:
      'https://user-images.githubusercontent.com/51187016/62545234-545f0d80-b82f-11e9-8739-272dd93922da.jpeg',
    address: 'Bridgeport',
    phone: '203-111-3333',
    email: 'johnh@gmail.com',
    department: 'Finance',
    supervisor: 'Chief Executive Officer',
    job: 'Chief Financial Officer',
    job_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias amet quos perferendis enim veniam, omnis quam totam animi voluptatum consectetur assumenda debitis qui rerum neque iste! Illo similique quaerat quo.',
    office: 'Stamford',
    salary: 150000,
    bonus: 15000,
    vacation: 15,
    skills: ['Front-end', 'Back-end']
  },
  {
    name: 'Mary',
    lastname: 'Perez',
    dob: '01-01-1988',
    img:
      'https://user-images.githubusercontent.com/51187016/62544156-40b2a780-b82d-11e9-80d8-8c0aace33d05.jpeg',
    address: 'New Haven',
    phone: '203-111-0000',
    email: 'mary@gmail.com',
    department: 'HR',
    supervisor: 'Chief Financial Officer',
    job: 'HR Manager',
    job_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias amet quos perferendis enim veniam, omnis quam totam animi voluptatum consectetur assumenda debitis qui rerum neque iste! Illo similique quaerat quo.',
    office: 'Stamford',
    salary: 90000,
    bonus: 5000,
    vacation: 15,
    skills: ['HRM']
  },
  {
    name: 'Peter',
    lastname: 'Louis',
    dob: '01-01-1987',
    img:
      'e10](https://user-images.githubusercontent.com/51187016/62545533-e23af880-b82f-11e9-819a-620e34ce3276.jpeg',
    address: 'Darien',
    phone: '203-111-1221',
    email: 'peter@gmail.com',
    department: 'Technology',
    supervisor: 'Chief Financial Officer',
    job: 'Full Stack Developer',
    job_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias amet quos perferendis enim veniam, omnis quam totam animi voluptatum consectetur assumenda debitis qui rerum neque iste! Illo similique quaerat quo.',
    office: 'Stamford',
    salary: 125000,
    bonus: 5000,
    vacation: 15,
    skills: ['IT', 'Front-end', 'Back-end']
  },
  {
    name: 'Wendy',
    lastname: 'Rodriguez',
    dob: '01-01-1977',
    img:
      'https://user-images.githubusercontent.com/51187016/62544662-3a70fb00-b82e-11e9-93d3-293d3ccc01ec.jpeg',
    address: 'Stamford',
    phone: '203-111-4411',
    email: 'wr@gmail.com',
    department: 'Sales',
    supervisor: 'Chief Executive Officer',
    job: 'Business Developer',
    job_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias amet quos perferendis enim veniam, omnis quam totam animi voluptatum consectetur assumenda debitis qui rerum neque iste! Illo similique quaerat quo.',
    office: 'Stamford',
    salary: 100000,
    bonus: 45000,
    vacation: 15,
    skills: ['Front-end', 'Back-end']
  },
  {
    name: 'Jim',
    lastname: 'James',
    dob: '01-01-1968',
    img:
      'https://user-images.githubusercontent.com/51187016/62398367-8712b880-b546-11e9-8ce3-1105d52dfa9d.jpeg',
    address: 'Stamford',
    phone: '203-111-4411',
    email: 'jj@gmail.com',
    department: 'Corp. Services',
    supervisor: 'HR Manager',
    job: 'Maintenance Assistant',
    job_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias amet quos perferendis enim veniam, omnis quam totam animi voluptatum consectetur assumenda debitis qui rerum neque iste! Illo similique quaerat quo.',
    office: 'Stamford',
    salary: 30000,
    bonus: 5000,
    vacation: 15,
    skills: ['Handyman']
  },
  {
    name: 'Lana',
    lastname: 'Craft',
    dob: '01-01-1985',
    img:
      'https://user-images.githubusercontent.com/51187016/62544849-891e9500-b82e-11e9-87c3-d1b878983aea.jpeg',
    address: 'Stamford',
    phone: '203-111-4411',
    email: 'lc@gmail.com',
    department: 'Technology',
    supervisor: 'IT_manager',
    job: 'Full Stack Developer',
    job_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias amet quos perferendis enim veniam, omnis quam totam animi voluptatum consectetur assumenda debitis qui rerum neque iste! Illo similique quaerat quo.',
    office: 'Stamford',
    salary: 101000,
    bonus: 5000,
    vacation: 15,
    skills: ['Front-end', 'Back-end']
  },
  {
    name: 'Will',
    lastname: 'Willis',
    dob: '01-01-1984',
    img:
      'https://user-images.githubusercontent.com/51187016/62398367-8712b880-b546-11e9-8ce3-1105d52dfa9d.jpeg',
    address: 'Stamford',
    phone: '203-111-4411',
    email: 'ww@gmail.com',
    department: 'Technology',
    supervisor: 'IT_manager',
    job: 'Full Stack Developer',
    job_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias amet quos perferendis enim veniam, omnis quam totam animi voluptatum consectetur assumenda debitis qui rerum neque iste! Illo similique quaerat quo.',
    office: 'Stamford',
    salary: 101000,
    bonus: 5000,
    vacation: 15,
    skills: ['Front-end', 'Back-end']
  }
];

const seedDb = () => {
  Employee.insertMany(employeeData, (err, collection) => {
    if (err) console.log(err);
    console.log('Seeded', collection);
  });
};

seedDb();

module.exports = employeeData;
