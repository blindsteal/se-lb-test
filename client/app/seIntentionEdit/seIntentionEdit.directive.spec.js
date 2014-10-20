'use strict';

describe('Directive: seIntentionEdit', function () {

  // load the directive's module and view
  beforeEach(module('vagrantApp'));
  beforeEach(module('app/seIntentionEdit/seIntentionEdit.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<se-intention-edit></se-intention-edit>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the seIntentionEdit directive');
  }));
});