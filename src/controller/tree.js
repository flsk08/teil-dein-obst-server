const Tree = require('../models/treeSchema');

const createTree = (req, res) => {
  Tree.create({
    type: 'Apfelbaum',
    location: '54.2340213',
    active: true,
    info: 'Bitte nicht selbständig pflücken.',
    comments: [
      'Schöner Baum',
      'Vorsicht - Ein Hund bewacht die Früchte. Lässt sich jedoch mit Snacks besänftigen.',
      'Obst schmeckt eher bääh.',
    ],
    picture: 'www.picture.de/242dsaj',
    harvestPeriod: { start: 01 - 08, end: 30 - 09 },
    ownerId: '133Kadjsl',
  });
};

module.exports = { createTree };
