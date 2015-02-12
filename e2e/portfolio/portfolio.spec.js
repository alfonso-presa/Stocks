'use strict';

describe('Portfolio View', function() {
  var page;

  beforeEach(function() {
    browser.get('/portfolio');
    page = require('./portfolio.po');
  });

  it('should save stocks', function() {
    page.stockName.sendKeys("testStockName");
    page.stockSymbol.sendKeys("testSymbol");
    page.stockAmount.sendKeys("123");
    page.addButton.click();
    expect(page.stocksTable.getText()).toContain('testStockName');
  });
});
