'use strict';

/**
 * @ngdoc service
 * @name labcodesApp.Requestapi
 * @description
 * # Requestapi
 * Service in the labcodesApp.
 */
angular.module('labcodesApp')
  .service('Requestapi', ['$http', 'ApiConfig', function ($http, ApiConfig) {

    var obj, apiUrl, githubUrl;

    obj = {};
    apiUrl = ApiConfig.API_URL;
    githubUrl = ApiConfig.GITHUB_URL;

    obj.Tweets = function(callback) {
      $http.get(githubUrl)
        .then(function (data) {
          callback(data);
        }, function (error) {
          callback(error);
        });
    };

    return obj;
  }]);
