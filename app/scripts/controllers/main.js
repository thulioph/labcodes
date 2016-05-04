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
      var tweets, locations;

      locations = [];

      Requestapi.Tweets(function(data) {
        if (data.status === 200) {
          tweets = data.data;
          $scope.tweets = tweets;

          angular.forEach(tweets, function(tw) {
            locations.push({
              id: tw.user.id,
              location: tw.user.location
            });
          });

          $scope.arrayLocations = locations;

          $scope.$broadcast('tweets_ok');
        } else {
          console.warn(data.status);
        }
      })
    };

    function _filterByLocation(location) {
      console.log('location', location)
    };
    // ====


    // ====
    // Call them

    $scope.getApiData = function() {
      $scope.progressbar.start();

      _getApiData();
    };

    $scope.filterByLocation = function(location) {
      _filterByLocation(location);
    };

    $scope.$on('tweets_ok', function() {
      $scope.progressbar.complete();
    });
    // ====

  }]);
