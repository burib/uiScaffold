module.exports = function() {
  var vm = this;

  vm.todoItems = [
    {
      'title': 'buy milk',
      'isComplete': false
    },
    {
      'title': 'drink coffee',
      'isComplete': true
    }
  ];

  return vm;
};
