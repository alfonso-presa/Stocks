'use strict';

describe('Controller: PortfolioCtrl', function () {

  // load the controller's module
  beforeEach(module('stocksApp'));

  var PortfolioCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/portfolio/1/stocks')
      .respond([
        {name: 'Santander', symbol: 'san', amount: 100},
        {name: 'Telefonica', symbol: 'tel', amount: 150},
        {name: 'L\'Oreal', symbol: 'lor', amount: 200},
      ]);

    scope = $rootScope.$new();
    PortfolioCtrl = $controller('PortfolioCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of stocks to the scope', function () {
    $httpBackend.flush();
    expect(scope.stocks.length).toBe(3);
  });

});
