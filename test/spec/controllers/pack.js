'use strict';

describe('Controller: PackCtrl', function () {

  // load the controller's module
  beforeEach(module('findTheMovingBoxApp'));

  var PackCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PackCtrl = $controller('PackCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
