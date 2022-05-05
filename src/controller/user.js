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
    },
    { upsert: true, new: true }
  ).then((tree) => res.send(tree));
};

const getAllUsers = (req, res) => {
  User.find().then((user) => res.send(user));
};

const getUserById = (req, res) => {
  User.findOne({ id: req.params.id }).then((user) => res.send(user));
};

const likeTree = (req, res) => {
  User.updateOne(
    { id: req.params.id },
    { $push: { favorites: req.body.treeId } }
  ).then((user) => res.send(user));
};

const dislikeTree = (req, res) => {
  User.updateOne(
    { id: req.params.id },
    { $pull: { favorites: req.body.treeId } }
  ).then((user) => res.send(user));
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  likeTree,
  dislikeTree,
};
