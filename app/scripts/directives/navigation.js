'use strict';

angular.module('findTheMovingBoxApp')
  .directive('navigation', function () {
    return {
      templateUrl: 'views/navigation.html',
      restrict: 'E',
      replace: true,
      scope: {
        pagename: '@',
        buttons: '='
      }
    };
  });
