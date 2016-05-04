'use strict';

/**
 * @ngdoc function
 * @name labcodesApp.controller:GeneralCtrl
 * @description
 * # GeneralCtrl
 * Controller of the labcodesApp
 */
angular.module('labcodesApp')
  .controller('GeneralCtrl', ['$scope', '$location', function ($scope, $location) {

    // ====
    // Set menu as active
    var active = '';

    $scope.isActive = function(path) {
      var active = (path === $location.path());
      return active;
    }
    // ====

  }]);
