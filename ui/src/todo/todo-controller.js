export default function(todoDataService) {
  todoDataService.getItems().then(items=> this.items = items);

  this.changeStatus = function(item) {
    item.isComplete = !item.isComplete;
    todoDataService.updateItem(item);
  };
};
