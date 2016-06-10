'use strict'
let users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
    login: (req, res, next) => {
        for (var i = 0; i < users.length; i++) {
            let name = req.body.name;
            let pass = req.body.password;
            if (users[i].name === name && users[i].password === pass) {
                req.session.currentUser = users[i];
                res.status(200).send({ userFound: true })
            }
        }
         res.status(500).send({ userFound: false })
    }
}