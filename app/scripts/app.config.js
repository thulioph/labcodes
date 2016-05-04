'use strict';

angular.module('labcodesApp')
.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
}])
.constant('ApiConfig', {
    'API_URL': 'scripts/assets/timeline.json',
    'GITHUB_URL': 'https://raw.githubusercontent.com/thulioph/labcodes/master/app/scripts/assets/timeline.json',
});
