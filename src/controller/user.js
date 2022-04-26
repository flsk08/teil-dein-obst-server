const User = require('../models/userSchema');

const createUser = (req, res) => {
  User.create({
    name: 'John Doe',
    email: 'johndoe@johnmail.com',
    favorites: ['235423sdfsd', '2332dassdfsa', '243dfs'],
    registeredTrees: ['r235423sdfsd', 'r2332dassdfsa', 'r243dfs'],
    password: '24543e34ert',
    picture: 'www.picture.de/2222',
  }).then((tree) => res.send(tree));
};

const getAllUsers = (req, res) => {
  User.find().then((user) => res.send(user));
};

const getUserById = (req, res) => {
  User.findOne({ _ownerId: req.params.id }).then((user) => res.send(user));
};

module.exports = { createUser, getAllUsers, getUserById };
