const express = require('express');
const router = express.Router();
const controller = require('../controller/tree');

router.post('/', controller.createTree);

router.get('/', controller.getAllTrees);

module.exports = router;
