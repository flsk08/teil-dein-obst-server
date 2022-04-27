const express = require('express');
const router = express.Router();
const controller = require('../controller/coordinates');

router.get('/', controller.sendMockData);

module.exports = router;
