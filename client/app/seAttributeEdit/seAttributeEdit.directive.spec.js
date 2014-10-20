'use strict';

describe('Directive: seAttributeEdit', function () {

  // load the directive's module and view
  beforeEach(module('vagrantApp'));
  beforeEach(module('app/seAttributeEdit/seAttributeEdit.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<se-attribute-edit></se-attribute-edit>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the seAttributeEdit directive');
  }));
});