import todoController from './todo-controller';
import todoDirectiveTemplate from './todo.tpl.html';

export default function() {
  return {
    controller: todoController,
    controllerAs: 'todoCtrl',
    replace: true,
    restrict: 'EA',
    template: todoDirectiveTemplate
  };
};
