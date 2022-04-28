const Tree = require("../models/treeSchema");

const createTree = (req, res) => {
  const {
    type,
    lat,
    lng,
    strasse,
    plz,
    stadt,
    status,
    info,
    start,
    end,
    ownerId,
  } = req.body;

  Tree.create({
    type: type,
    coordinates: {
      lat: lat,
      lng: lng,
    },
    location: {
      strasse: strasse,
      plz: plz,
      stadt: stadt,
    },
    status: {
      status: status,
    },
    info: info,
    harvestPeriod: { start: start, end: end },
    ownderId: ownerId,
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
