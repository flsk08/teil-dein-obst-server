const Tree = require("../models/treeSchema");

const createTree = (req, res) => {
  const {
    type,
    lat,
    lng,
    address,
    active,
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
    active: active,
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

const deactivateTreeById = (req, res) => {
  Tree.updateOne({ _id: req.params.id }, { $set: { active: false } }).then(
    (tree) => res.send(tree)
  );
};

const reactivateTreeById = (req, res) => {
  Tree.updateOne({ _id: req.params.id }, { $set: { active: true } }).then(
    (tree) => res.send(tree)
  );
};

const deleteTreeById = (req, res) => {
  Tree.findByIdAndRemove({ _id: req.params.id }).then((tree) => res.send(tree));
};

module.exports = {
  createTree,
  getAllTrees,
  getTreeById,
  getAllTreesFromUser,
  deactivateTreeById,
  reactivateTreeById,
  deleteTreeById,
};
