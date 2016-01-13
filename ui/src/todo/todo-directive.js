module.exports = function() {
  return {
    controller: require('./todo-controller'),
    controllerAs: 'todoCtrl',
    replace: true,
    restrict: 'EA',
    template: require('./todo.tpl.html')
  };
};
