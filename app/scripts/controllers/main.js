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

    // Get api data
    function _getApiData() {
      var tweets;

      Requestapi.Tweets(function(data) {
        if (data.status === 200) {
          tweets = data.data;
          $scope.tweets = tweets;

          $scope.$broadcast('tweets_ok');
        } else {
          console.warn(data.status);
        }
      })
    }
    // ====


    // ====
    // Call them

    $scope.getApiData = function() {
      $scope.progressbar.start();

      _getApiData();
    };

    $scope.$on('tweets_ok', function() {
      $scope.progressbar.complete();
    });
    // ====

  }]);
