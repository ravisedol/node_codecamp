const express = require('express');
const router = express.Router();

// controller
const {unixTimes} = require('../controller/TestController');

router.get('/:date?',unixTimes);

module.exports = router;