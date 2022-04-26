const User = require('../models/userSchema');

const createUser = (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;

  User.findOneAndUpdate(
    { id: id },
    {
      id: id,
      name: name,
      email: email,
      // favorites: ['235423sdfsd', '2332dassdfsa', '243dfs'],
      // registeredTrees: ['r235423sdfsd', 'r2332dassdfsa', 'r243dfs'],
      // picture: 'www.picture.de/2222',
    },
    { upsert: true, new: true }
  ).then((tree) => res.send(tree));
};

const getAllUsers = (req, res) => {
  User.find().then((user) => res.send(user));
};

const getUserById = (req, res) => {
  User.findOne({ _ownerId: req.params.id }).then((user) => res.send(user));
};

module.exports = { createUser, getAllUsers, getUserById };
