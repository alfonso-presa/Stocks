'use strict';

var express = require('express');
var controller = require('./portfolio.controller');

var router = express.Router();


router.get('/:pid/stocks', controller.stock.index);
router.post('/:pid/stocks', controller.stock.create);

module.exports = router;
