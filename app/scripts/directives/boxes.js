'use strict';

angular.module('findTheMovingBoxApp')
  .directive('boxes', function () {
    return {
      templateUrl: 'views/boxes.html',
      restrict: 'E',
      replace: true,
      scope: {
        select: '&'
      },
      controller: function($scope) {
        var lastId;

        $scope.boxes = [
          {
            id: 1
          }
        ];

        $scope.$watch('boxes', function() {
          lastId = _.max($scope.boxes, function(b) {
            return b.id;
          }).id;
        });

        $scope.add = function() {
          lastId += 1;

          $scope.boxes.push({
            id: lastId
          });
        };
      }
    };
  });
