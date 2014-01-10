'use strict';

describe('Controller: UnpackCtrl', function () {

  // load the controller's module
  beforeEach(module('findTheMovingBoxApp'));

  var UnpackCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UnpackCtrl = $controller('UnpackCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
