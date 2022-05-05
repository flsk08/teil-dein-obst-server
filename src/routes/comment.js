const express = require('express');
const router = express.Router();
const controller = require('../controller/comment');

router.post('/', controller.createComment);

router.get('/', controller.getAllComments);

router.get('/:id', controller.getAllCommentsFromTree);

module.exports = router;