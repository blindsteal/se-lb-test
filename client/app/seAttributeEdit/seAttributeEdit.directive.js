'use strict';

angular.module('vagrantApp')
    .directive('seAttributeEdit', function () {
        return {
            templateUrl: 'app/seAttributeEdit/seAttributeEdit.html',
            restrict: 'E',
            scope: {
                attribute: '=attribute'
            },
            controller: function ($scope, dataService) {
                $scope.saveAttribute = function () {
                    dataService.submitAttribute($scope.attribute);
                };
            },
            link: function (scope, element, attrs) {
            }
        };
    });