const Tree = require('../models/treeSchema');

const createTree = (req, res) => {
  const {
    type,
    lat,
    lng,
    address,
    status,
    info,
    start,
    end,
    userId,
    pictureURL,
  } = req.body;

  Tree.create({
    type: type,
    coordinates: {
      lat: lat,
      lng: lng,
    },
    location: {
      address: address,
    },
    status: {
      status: status,
    },
    info: info,
    harvestPeriod: { start: start, end: end },
    userId: userId,
    pictureURL: pictureURL,
  }).then((tree) => res.send(tree));
};

const getAllTrees = (req, res) => {
  Tree.find().then((tree) => res.send(tree));
};

const getTreeById = (req, res) => {
  Tree.find({ _id: req.params.id }).then((tree) => res.send(tree));
};

const getAllTreesFromUser = (req, res) => {
  Tree.find({ userId: req.params.id }).then((user) => res.send(user));
};

module.exports = { createTree, getAllTrees, getTreeById, getAllTreesFromUser };
