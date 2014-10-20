'use strict';

angular.module('vagrantApp')
    .directive('seCategoryEdit', function () {
        return {
            templateUrl: 'app/seCategoryEdit/seCategoryEdit.html',
            restrict: 'E',
            scope: {
                category: '=category'
            },
            controller: function ($scope, dataService) {
                $scope.attributeToAdd = undefined;
                $scope.intentionToAdd = undefined;
                $scope.data = dataService.getData();

                $scope.removeAttribute = function(category, attribute){
                    _.remove($scope.category.attributes, function(attr){return attr.attribute === attribute.attribute;});
                };

                $scope.removeIntention = function(category, intention){
                    _.remove($scope.category.intentions, function(int){return int === intention;});
                };

                $scope.addAttribute = function (category) {
                    $scope.category.attributes = ($scope.category.attributes === undefined) ? [] : $scope.category.attributes;
                    if (_.contains(_.pluck($scope.category.attributes, 'attribute'), $scope.attributeToAdd.attribute)) {
                        $scope.attributeToAdd = undefined;
                        return;
                    }
                    category.attributes.push({attribute: $scope.attributeToAdd.attribute, value: $scope.attributeToAdd.value});
                    $scope.attributeToAdd = undefined;
                };

                $scope.addIntention = function (category) {
                    $scope.category.intentions = ($scope.category.intentions === undefined) ? [] : $scope.category.intentions;
                    if (_.contains($scope.category.intentions, $scope.intentionToAdd)) {
                        $scope.intentionToAdd = undefined;
                        return;
                    }
                    category.intentions.push($scope.intentionToAdd);
                    $scope.intentionToAdd = undefined;
                };

                $scope.saveCategory = function () {
                    dataService.submitCategory($scope.category);
                };
            },
            link: function (scope, element, attrs) {
            }
        };
    });