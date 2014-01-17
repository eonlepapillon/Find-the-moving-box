'use strict';

describe('Directive: addStuff', function () {

  // load the directive's module
  beforeEach(module('findTheMovingBoxApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<add-stuff></add-stuff>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the addStuff directive');
  }));
});
