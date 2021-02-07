const bcrypt = require('bcrypt');

const users = [
  {
    name: 'Asim Jaipuri',
    email: 'asim@gmail.com',
    isAdmin: true,
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Suzan Jaipuri',
    email: 'suzan@gmail.com',
    isAdmin: false,
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Muskan Jaipuri',
    email: 'muskan@gmail.com',
    isAdmin: false,
    password: bcrypt.hashSync('123456', 10),
  },
];

module.exports = users;
