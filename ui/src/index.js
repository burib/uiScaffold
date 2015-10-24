require('./index.scss'); // global css variables and rules for the whole app

angular.module('app', [])
  .config(function($routeProvider, $locationProvider     ) {
    // This sets the url mode to html5 clean URLs.
    $locationProvider.html5Mode(true);
  });
