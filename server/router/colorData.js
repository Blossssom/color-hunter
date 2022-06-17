const { getNewData, getPopularData, postColor } = require('../controller/colorController');
const express = require('express');
const router = express.Router();

router.get('/', getNewData);

router.get('/popular', getPopularData);

router.post('/', postColor);

module.exports = router;