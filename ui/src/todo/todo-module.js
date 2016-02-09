import './todo.scss';

import todoDirective from './todo-directive';
import todoDataService from './todo-data-service';

export default angular.module('todo', [])
  .directive('todo', todoDirective)
  .factory('todoDataService', todoDataService);
