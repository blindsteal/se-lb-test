'use strict';

angular.module('vagrantApp')
  .factory('dataService', function ($http) {
        var data = {
            intentions: [],
            attributes: [],
            categories: []
        };

        var updateIntentions = function() {
            $http.get('/api/finances/intentions').success(function (ints) {
                data.intentions = ints;
            });
        };

        var updateCategories = function () {
            $http.get('/api/finances/categories').success(function (categories) {
                data.categories = categories;
            });
        };

        var updateAttributes = function () {
            $http.get('/api/finances/attributes').success(function (attributes) {
                data.attributes = attributes;
            });
        };

        var submitIntention = function(int) {
            if (int === undefined) {
                return;
            }
            if (_.contains(_.pluck(data.intentions, '_id'), int._id)) {
                $http.put('/api/finances/intentions/' + int._id, int);
            }
            else {
                $http.post('/api/finances/intentions', int);
            }
            int = undefined;
            updateIntentions();
        };

        var submitCategory = function (cat) {
            if (cat === undefined) {
                return;
            }
            if (_.contains(_.pluck(data.categories, '_id'), cat._id)) {
                $http.put('/api/finances/categories/' + cat._id, cat);
            }
            else {
                $http.post('/api/finances/categories', cat);
            }
            cat = undefined;
            updateCategories();
        };

        var submitAttribute = function (attr) {
            if (attr === undefined) {
                return;
            }
            if (_.contains(_.pluck(data.attributes, '_id'), attr._id)) {
                $http.put('/api/finances/attributes/' + attr._id, attr);
            }
            else {
                $http.post('/api/finances/attributes', attr);
            }
            attr = undefined;
            updateAttributes();
        };

        var deleteIntention = function(id){
            $http.delete('/api/finances/intentions/' + id, null);
            updateIntentions();
        };

        var deleteAttribute = function(id){
            $http.delete('/api/finances/attributes/' + id, null);
            updateAttributes();
        };

        var deleteCategory = function(id){
            $http.delete('/api/finances/categories/' + id, null);
            updateCategories();
        };

        var getData = function(){
            return data;
        };

        updateIntentions();
        updateAttributes();
        updateCategories();

        // Public API here
        return {
            updateIntentions: updateIntentions,
            updateCategories: updateCategories,
            updateAttributes: updateAttributes,
            submitIntention: submitIntention,
            submitCategory: submitCategory,
            submitAttribute: submitAttribute,
            deleteAttribute: deleteAttribute,
            deleteCategory: deleteCategory,
            deleteIntention: deleteIntention,
            getData: getData
        };
  });
