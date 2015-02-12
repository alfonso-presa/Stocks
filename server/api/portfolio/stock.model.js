'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StockSchema = new Schema({
  portfolio: Number,
  name: String,
  symbol: String,
  amount: Number
});

module.exports = mongoose.model('Stock', StockSchema);
