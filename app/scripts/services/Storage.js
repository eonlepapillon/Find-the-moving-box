'use strict';

angular.module('findTheMovingBoxApp')
  .factory('Storage', function ($window) {
    var boxes,
      stuff,
      ls = $window.localStorage,
      saveBoxesToLs = function() {
        ls.boxes = angular.toJson(boxes);
      },
      saveStuffToLs = function() {
        ls.stuff = angular.toJson(stuff);
      };

    if(!ls.boxes){
      ls.boxes = JSON.stringify([{id:1}]);
    }

    boxes = JSON.parse(ls.boxes);

    if(!ls.stuff){
      ls.stuff = JSON.stringify([]);
    }

    stuff = JSON.parse(ls.stuff);

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

        saveBoxesToLs();
      },
      removeBox: function(box) {
        boxes = _.reject(boxes, function(b) {
          return b.id === box.id ? true : false;
        });

        saveBoxesToLs();
      },
      getStuff: function() {
        return stuff;
      },
      addThing: function(thing) {
        stuff.unshift(thing);

        saveStuffToLs();
      },
      removeThing: function(thing) {
        stuff = _.reject(stuff, function(t) {
          return (t.term === thing.term && t.boxid === thing.boxid) ? true : false;
        });

        saveStuffToLs();
      }
    };
  });
