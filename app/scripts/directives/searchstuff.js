'use strict';

angular.module('findTheMovingBoxApp')
  .directive('searchStuff', function () {
    return {
      templateUrl: 'views/dowithstuff.html',
      restrict: 'E',
      replace: true,
      scope: {
        do: '&searchFn'
      },
      controller: function($scope) {
        $scope.button = 'stuff.search.button';

        $scope.$watch('term', function(term) {
          $scope.do({term: term});
        });
      }
    };
  });
