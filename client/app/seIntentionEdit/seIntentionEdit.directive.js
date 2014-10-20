'use strict';

angular.module('vagrantApp')
    .directive('seIntentionEdit', function () {
        return {
            templateUrl: 'app/seIntentionEdit/seIntentionEdit.html',
            restrict: 'E',
            scope: {
                intention: '=intention'
            },
            controller: function($scope, dataService){
                $scope.saveIntention = function(){
                    dataService.submitIntention($scope.intention);
                };
            },
            link: function (scope, element, attrs) {
            }
        };
    });