/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var PortfolioPage = function() {
  this.stockName = element(by.id('stockName'));
  this.stockSymbol = element(by.id('stockSymbol'));
  this.stockAmount = element(by.id('stockAmount'));
  this.addButton = element(by.id('addButton'));
  this.stocksTable = element(by.id('stocks-table'));
};

module.exports = new PortfolioPage();

