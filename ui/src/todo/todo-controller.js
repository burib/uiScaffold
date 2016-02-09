export default function(todoDataService) {
  var vm = this;

  todoDataService.getItems().then(function(items) {
    vm.items = items;
  });

  vm.changeStatus = function(item) {
    item.isComplete = !item.isComplete;
    todoDataService.updateItem(item);
  };

  return vm;
};
