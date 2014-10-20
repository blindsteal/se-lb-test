'use strict';

describe('Directive: seCategoryEdit', function () {

  // load the directive's module and view
  beforeEach(module('vagrantApp'));
  beforeEach(module('app/seCategoryEdit/seCategoryEdit.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<se-category-edit></se-category-edit>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the seCategoryEdit directive');
  }));
});