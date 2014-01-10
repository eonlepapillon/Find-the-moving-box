'use strict';

angular.module('findTheMovingBoxApp')
  .controller('UnpackCtrl', function ($scope) {
    $scope.pagename = 'unpack';

    $scope.buttons = [{
      label: 'config',
      url: '#/config'
    },{
      label: 'pack',
      url: '#/pack',
      css: 'btn btn-warning'
    }];
  });
