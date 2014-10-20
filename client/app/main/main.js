'use strict';

angular.module('vagrantApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/example',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });