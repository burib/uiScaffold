import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss'; // global css variables and rules for the whole app

import todoModule from './todo/todo-module';

angular.module('app', [
  ngRoute,
  todoModule.name
])
  .config(function($routeProvider) {
    $routeProvider
      .when('/todo', {
        template: '<todo><todo>',
        title: 'List of Todos'
      });
  })
  .config(function($locationProvider) {
    // This sets the url mode to html5 clean URLs.
    $locationProvider.html5Mode(true);
  });
