'use strict';

angular.module('vagrantApp')
  .factory('dataService', function ($http, Intention, Attribute, Category, CaScore) {
        var data = {
            intentions: [],
            attributes: [],
            categories: []
        };

        var updateIntentions = function() {
            Intention.find({}, function(intentions){
                data.intentions = intentions;
            });
        };

        var updateCategories = function () {
            Category.find({filter:{include:['intentions', 'scores']}}, function(categories){
                data.categories = categories;
            });
        };

        var updateAttributes = function () {
            Attribute.find({}, function(attributes){
                data.attributes = attributes;
            });
        };

        var submitIntention = function(int) {
            if (int === undefined) {
                return;
            }
            Intention.updateOrCreate(int, function(intention){
                updateIntentions();
            });
            int = undefined;
        };

        var submitCategory = function (cat) {
            if (cat === undefined) {
                return;
            }
            Category.updateOrCreate(cat, function(category){
                updateCategories();
            });
            cat = undefined;
        };

        var submitAttribute = function (attr) {
            if (attr === undefined) {
                return;
            }
            Attribute.updateOrCreate(attr, function(attribute){
                updateAttributes();
            });
            attr = undefined;
        };

        var deleteIntention = function(id){
            Intention.removeById({id: id}, function(removed){
                updateIntentions();
            });
        };

        var deleteAttribute = function(id){
            Attribute.removeById({id: id}, function(removed){
                updateAttributes();
            });
        };

        var deleteCategory = function(id){
            Category.removeById({id: id}, function(removed){
                updateCategories();
            });
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
