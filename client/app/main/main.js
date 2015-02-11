'use strict';

angular.module('stocksApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'app/portfolio/portfolio.html',
        controller: 'PortfolioCtrl'
      });
  });
