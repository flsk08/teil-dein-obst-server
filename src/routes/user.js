const express = require('express');
const router = express.Router();
const controller = require('../controller/user');

router.get('/', controller.getAllUsers);

router.post('/:id', controller.createUser);

router.get('/:id', controller.getUserById);

module.exports = router;
