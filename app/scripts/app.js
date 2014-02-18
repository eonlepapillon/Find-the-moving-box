'use strict';

angular.module('findTheMovingBoxApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngTouch',
  'ngAnimate',
  'jm.i18next',
  'ngAnnyang'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/pack', {
        templateUrl: 'views/pack.html',
        controller: 'PackCtrl'
      })
      .when('/unpack', {
        templateUrl: 'views/unpack.html',
        controller: 'UnpackCtrl'
      })
      .when('/config', {
        templateUrl: 'views/config.html',
        controller: 'ConfigCtrl'
      })
      .otherwise({
        redirectTo: '/pack'
      });
  })
  .config(function ($i18nextProvider) {
    $i18nextProvider.options = {
      preload: ['en', 'nl'],
      useLocalStorage: false,
      fallbackLng: 'en',
      resGetPath: '../locales/__lng__.json'
    };
  })
  .config(function(ngAnnyangProvider) {
    ngAnnyangProvider.setLanguage('');
    ngAnnyangProvider.debug();
  });
