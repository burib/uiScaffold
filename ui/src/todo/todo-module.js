require('./todo.scss');

module.exports = angular.module('todo', [])
  .directive('todo', require('./todo-directive'))
  .factory('todoDataService', require('./todo-data-service'));
