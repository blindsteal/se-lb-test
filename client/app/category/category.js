'use strict';

angular.module('vagrantApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('category', {
        url: '/',
        templateUrl: 'app/category/category.html',
        controller: 'CategoryCtrl'
      });
  });