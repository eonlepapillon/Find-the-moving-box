'use strict';

angular.module('findTheMovingBoxApp')
  .directive('stuff', function () {
    return {
      templateUrl: 'views/stuff.html',
      restrict: 'E',
      replace: true,
      transclude: true,
      scope: {
        order: '@',
        filter: '='
      },
      controller: function($scope, Storage) {
        $scope.stuff = Storage.getStuff();
      }
    };
  });
