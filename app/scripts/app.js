'use strict';

/**
 * @ngdoc overview
 * @name labcodesApp
 * @description
 * # labcodesApp
 *
 * Main module of the application.
 */
angular
  .module('labcodesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularMoment',
    'ngProgress'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(['$window', '$rootScope', function ($window, $rootScope) {
    // Offline
    $rootScope.online = navigator.onLine;

    $window.addEventListener("offline", function () {
      $rootScope.$apply(function() {
        $rootScope.online = false;
        $rootScope.$emit('network_changed');
      });
    }, false);

    $window.addEventListener("online", function () {
      $rootScope.$apply(function() {
        $rootScope.online = true;
        $rootScope.$emit('network_changed');
      });
    }, false);

    function _setOnlineStatus() {
      console.log('online')
    }

    function _setOfflineStatus() {
      console.log('offline')
    }

    $rootScope.$on('network_changed', function() {
      if ($rootScope.online === true) {
        _setOnlineStatus();
      } else {
        _setOfflineStatus();
      }
    })
    // ====
  }]);
