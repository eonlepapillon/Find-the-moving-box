'use strict';

angular.module('findTheMovingBoxApp')
  .directive('addStuff', function () {
    return {
      templateUrl: 'views/dowithstuff.html',
      restrict: 'E',
      replace: true,
      scope: {
        boxid: '@'
      },
      controller: function($scope, Storage) {
        $scope.button = 'stuff.add.button';

        $scope.do = function(thing) {
          if(thing.term.length > 0){
            //TODO: find an image
            Storage.addThing({
              term: thing.term,
              boxid: $scope.boxid
            });

            $scope.clear();
          }
        };

        $scope.clear = function() {
          $scope.term = '';
        };
      }
    };
  });
