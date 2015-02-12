'use strict';

angular.module('stocksApp')
  .controller('PortfolioCtrl', function ($scope, $resource) {

    var StocksService = $resource('/api/portfolio/1/stocks');

    function createEditingStock() {
      $scope.stock = new StocksService();
      $scope.stock.name = '';
      $scope.stock.symbol = '';
      $scope.stock.amount = 0;
    }

    $scope.stocks = StocksService.query();

    createEditingStock();

    $scope.saveStock = function() {
      $scope.stock.$save(function() {
        $scope.stocks.push($scope.stock);
        createEditingStock();
      });
    };

  });
