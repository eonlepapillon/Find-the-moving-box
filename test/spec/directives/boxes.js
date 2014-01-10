'use strict';

describe('Directive: boxes', function () {

  // load the directive's module
  beforeEach(module('findTheMovingBoxApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<boxes></boxes>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the boxes directive');
  }));
});
