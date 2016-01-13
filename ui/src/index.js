require('font-awesome/css/font-awesome.css');
require('bootstrap/dist/css/bootstrap.css');
require('./index.scss'); // global css variables and rules for the whole app

angular.module('app', [
  'ngRoute',
  require('./todo/todo-module').name
])
  .config(function($routeProvider) {
    $routeProvider
      .when('/todo', {
        template: '<todo><todo>',
        title: 'List of Todos'
      })
  })
  .config(function($locationProvider) {
    // This sets the url mode to html5 clean URLs.
    $locationProvider.html5Mode(true);
  });
