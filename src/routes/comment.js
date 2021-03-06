const express = require('express');
const router = express.Router();
const controller = require('../controller/comment');

router.post('/', controller.createComment);

router.get('/', controller.getAllComments);

router.get('/:id', controller.getAllCommentsFromTree);

router.put('/:id', controller.deleteComment);

module.exports = router;
