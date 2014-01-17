'use strict';

angular.module('findTheMovingBoxApp')
  .controller('UnpackCtrl', function ($scope) {
    $scope.pagename = 'unpack';

    $scope.buttons = [{
      label: 'config',
      url: '#/config',
      type: 'default'
    },{
      label: 'pack',
      url: '#/pack',
      type: 'warning'
    }];

    $scope.boxid = 1;

    $scope.selectBox = function(id) {
      $scope.boxid = id;
    };

    $scope.filter = '';

    $scope.search = function(term) {
      $scope.filter = term;
    };
  });
