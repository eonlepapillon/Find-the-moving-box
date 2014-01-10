'use strict';

angular.module('findTheMovingBoxApp')
  .controller('PackCtrl', function ($scope) {
    $scope.pagename = 'pack';

    $scope.buttons = [{
      label: 'config',
      url: '#/config'
    },{
      label: 'unpack',
      url: '#/unpack',
      css: 'btn btn-success'
    }];

    $scope.selectedBox = 1;

    $scope.selectBox = function(id) {
      $scope.selectedBox = id;
    };
  });
