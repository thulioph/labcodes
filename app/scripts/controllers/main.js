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

    function _filterByUsername(params) {
      console.log('username', params);
    };

    function _filterByLocation(params) {
      console.log('location', params);
    };

    function _orderBy(params) {
      console.log('orderby', params);
    };
    // ====


    // ====
    // Call them

    $scope.getApiData = function() {
      $scope.progressbar.start();

      _getApiData();
    };

    $scope.filterByUsername = function(args) {
      _filterByUsername(args);
    };

    $scope.filterByLocation = function(args) {
      _filterByLocation(args);
    };

    $scope.orderBy = function(args) {
      _orderBy(args);
    };

    $scope.$on('tweets_ok', function() {
      $scope.progressbar.complete();
    });
    // ====

  }]);
