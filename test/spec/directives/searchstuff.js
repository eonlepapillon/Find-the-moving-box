'use strict';

describe('Directive: searchStuff', function () {

  // load the directive's module
  beforeEach(module('findTheMovingBoxApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<search-stuff></search-stuff>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the searchStuff directive');
  }));
});
