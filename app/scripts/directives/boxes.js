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
      controller: function($scope, Storage) {
        var lastId = Storage.getLastBox().id;

        $scope.boxes = Storage.getBoxes();

        $scope.add = function() {
          lastId += 1;

          Storage.addBox({
            id: lastId
          });

          $scope.select({id: lastId});
        };
      }
    };
  });
