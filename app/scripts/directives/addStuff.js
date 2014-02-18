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
      controller: function($scope, Storage, $i18next, ngAnnyang) {
        var commands = {};

        commands[$i18next('stuff.add.speech.command')] = function(term) {
          $scope.term = term;
          $scope.$digest();
        };

        $scope.button = 'stuff.add.button';

        ngAnnyang.isEnabled(function(enabled) {
          $scope.speech = enabled;
          $scope.$digest();
        });

        ngAnnyang.addCommands(commands);

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

        $scope.$on('$destroy', function() {
          if(commands){
            ngAnnyang.removeCommands(_.keys(commands));
          }
        });
      }
    };
  });
