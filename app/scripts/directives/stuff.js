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

        $scope.remove = function(index) {
          var thing = $scope.stuff.splice(index, 1)[0];

          $scope.undo = {
            index: index,
            thing: thing
          };

          Storage.removeThing(thing);
        };
      }
    };
  });
