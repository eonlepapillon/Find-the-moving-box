'use strict';

angular.module('findTheMovingBoxApp')
  .controller('ConfigCtrl', function ($scope) {
    $scope.pagename = 'config';

    $scope.buttons = [{
      label: 'pack',
      url: '#/pack',
      css: 'btn btn-warning'
    }, {
      label: 'unpack',
      url: '#/unpack',
      css: 'btn btn-success'
    }];
  });
