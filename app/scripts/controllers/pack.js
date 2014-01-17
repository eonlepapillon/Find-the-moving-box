'use strict';

angular.module('findTheMovingBoxApp')
  .controller('PackCtrl', function ($scope) {
    $scope.pagename = 'pack';

    $scope.buttons = [{
      label: 'config',
      url: '#/config',
      type: 'default'
    },{
      label: 'unpack',
      url: '#/unpack',
      type: 'success'
    }];

    $scope.boxid = 1;

    $scope.selectBox = function(id) {
      $scope.boxid = id;
    };
  });
