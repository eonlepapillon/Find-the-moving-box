'use strict';

angular.module('findTheMovingBoxApp')
  .controller('ConfigCtrl', function ($scope) {
    $scope.pagename = 'config';

    $scope.buttons = [{
      label: 'pack',
      url: '#/pack',
      type: 'warning'
    }, {
      label: 'unpack',
      url: '#/unpack',
      type: 'success'
    }];
  });
