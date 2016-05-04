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

    function _filter(params) {
      $scope.customFilter = params;
    };

    function _initMap(params) {
      var map, geocoder, marker;

      map = new google.maps.Map(document.getElementById(params.selector), {
        zoom: 8,
        center: { lat: -34.397, lng: 150.644 } // fake lat/lng
      });

      geocoder = new google.maps.Geocoder();

      $scope.map = map;
      $scope.geocoder = geocoder;

      $scope.$broadcast('map_ok');
    };

    function _showMap(params) {
      var marker, address;

      address = '';
      address = params;

      $scope.geocoder.geocode({'address': address}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {

          marker = new google.maps.Marker({
            map: $scope.map,
            position: results[0].geometry.location
          });

          $scope.map.setCenter(results[0].geometry.location);

        } else {
          console.warn('Geocode was not successful for the following reason: ' + status);
        }
      });
    };
    // ====


    // ====
    // Call them

    $scope.getApiData = function() {
      $scope.progressbar.start();

      _getApiData();
    };

    $scope.filter = function(args) {
      _filter(args);
    };

    $scope.$on('tweets_ok', function() {
      $scope.progressbar.complete();
    });

    $scope.showMap = function(address, id) {
      var map, addr;

      map = $('#mini-map-' + id);
      addr = address;

      _initMap(map);

      $scope.$on('map_ok', function() {
        _showMap(addr);
      })
    };
    // ====

  }]);
