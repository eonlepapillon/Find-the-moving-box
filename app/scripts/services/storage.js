'use strict';

angular.module('findTheMovingBoxApp')
  .factory('Storage', function ($window) {
    var boxes,
      stuff,
      saveBoxes = function() {
        $window.localStorage.boxes = angular.toJson(boxes);
      },
      saveStuff = function() {
        $window.localStorage.stuff = angular.toJson(stuff);
      };

    if(!$window.localStorage.boxes){
      $window.localStorage.boxes = JSON.stringify([{id:1}]);
    }

    boxes = JSON.parse($window.localStorage.boxes);

    if(!$window.localStorage.stuff){
      $window.localStorage.stuff = JSON.stringify([]);
    }
    stuff = JSON.parse($window.localStorage.stuff);

    return {
      getLastBox: function() {
        return _.max(boxes, function(b) {
          return b.id;
        });
      },
      getBoxes: function() {
        return boxes;
      },
      addBox: function(box) {
        boxes.push(box);

        saveBoxes();
      },
      removeBox: function(box) {
        boxes = _.reject(boxes, function(b) {
          return b.id === box.id ? true : false;
        });

        saveBoxes();
      },
      getStuff: function() {
        return stuff;
      },
      addThing: function(thing) {
        stuff.unshift(thing);

        saveStuff();
      },
      removeThing: function(thing) {
        stuff = _.reject(stuff, function(t) {
          return t.label === thing.label ? true : false;
        });

        saveStuff();
      }
    };
  });
