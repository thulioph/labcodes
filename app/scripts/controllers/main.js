'use strict';

/**
 * @ngdoc function
 * @name labcodesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the labcodesApp
 */
angular.module('labcodesApp')
  .controller('MainCtrl', ['$scope', 'Requestapi', function ($scope, Requestapi) {

    // ====
    // Declaratie functions
    function _getApiData() {
      var tweets;

      Requestapi.Tweets(function(data) {
        if (data.status === 200) {
          tweets = data.data;

          $scope.tweets = tweets;
        } else {
          console.warn(data.status);
        }
      })
    }
    // ====


    // ====
    // Call them
    $scope.getApiData = function() {
      _getApiData();
    };
    // ====

  }]);
