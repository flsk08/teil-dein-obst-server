const express = require('express');
const router = express.Router();
const controller = require('../controller/tree');

router.post('/', controller.createTree);

router.get('/', controller.getAllTrees);

router.get('/:id', controller.getTreeById);

router.get('/collection/:id', controller.getAllTreesFromUser);

router.put('/:id', controller.deactivateTreeById);

router.put('/:id/reactivate', controller.reactivateTreeById);

router.delete('/:id', controller.deleteTreeById);

module.exports = router;
