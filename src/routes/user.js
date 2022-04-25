const express = require('express');
const router = express.Router();
const controller = require('../controller/user');

router.post('/', controller.createUser);

router.get('/', controller.getAllUsers);

module.exports = router;
