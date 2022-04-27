const express = require('express');
const router = express.Router();
const controller = require('../controller/tree');

router.post('/', controller.createTree);

router.get('/', controller.getAllTrees);

router.get('/:id', controller.getTreeById);

router.get('/collection/:id', controller.getAllTreesForUser);

module.exports = router;
