require('font-awesome/css/font-awesome.css');
require('bootstrap/dist/css/bootstrap.css');
require('./index.scss'); // global css variables and rules for the whole app

angular.module('app', [
  require('./todo/todo-module').name
])
  .config(function($locationProvider) {
    // This sets the url mode to html5 clean URLs.
    $locationProvider.html5Mode(true);
  });
