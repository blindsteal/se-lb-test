'use strict';

angular.module('vagrantApp')
    .controller('CategoryCtrl', function ($scope, $http, dataService) {
        $scope.data = dataService.getData();

        $scope.newCategory = undefined;
        $scope.newAttribute = undefined;
        $scope.newIntention = undefined;

        $scope.loadCategory = function (id) {
            $scope.newCategory = _.cloneDeep(_.find($scope.data.categories, {id: id}));
        };

        $scope.loadAttribute = function (id) {
            $scope.newAttribute = _.cloneDeep(_.find($scope.data.attributes, {id: id}));
        };

        $scope.loadIntention = function (id) {
            $scope.newIntention = _.cloneDeep(_.find($scope.data.intentions, {id: id}));
        };

        $scope.deleteIntention = function(id){
            dataService.deleteIntention(id);
        };

        $scope.deleteAttribute = function(id){
            dataService.deleteAttribute(id);
        };

        $scope.deleteCategory = function(id){
            dataService.deleteCategory(id);
        };

        $scope.hasAttribute = function(attributeId) {
            return function(category) {
                if(!attributeId) return true;
                return _.contains(_.pluck(category.attributes, 'attribute'), attributeId);
            };
        };

        $scope.attributeValue = function(attributeId){
            return function(category){
                _.some(category.attributes, {attribute:attributeId});
            }
        };

    });