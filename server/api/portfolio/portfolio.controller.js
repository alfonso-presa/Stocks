
'use strict';

var _ = require('lodash');
var Stock = require('./stock.model');


exports.stock = {
  index: function(req, res) {
    Stock.find({portfolio: req.params.pid},function(err, stocks) {
      if(err) {
        return handleError(res, err);
      }
      return res.json(200, stocks);
    });
  },
  create : function(req, res) {
    req.body.portfolio = req.params.pid;
    Stock.create(req.body, function(err, stock) {
      if(err) { return handleError(res, err); }
      return res.json(201, stock);
    });
  }
};


function handleError(res, err) {
  return res.send(500, err);
}
