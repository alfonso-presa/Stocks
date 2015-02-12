'use strict';

angular.module('stocksApp')
  .controller('PortfolioCtrl', function ($scope, $resource) {

    var stocksService = $resource('/api/portfolio/1/stocks');

    $scope.stocks = stocksService.query();

    createEditingStock();


    $scope.saveStock = function() {
      $scope.stock.$save(function() {
        $scope.stocks.push($scope.stock);
        createEditingStock();
      });
    };

    function createEditingStock() {
      $scope.stock = new stocksService();
      $scope.stock.name = '';
      $scope.stock.symbol = '';
      $scope.stock.amount = 0;
    }
  });
