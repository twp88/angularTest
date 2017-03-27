var toDoList = angular.module('toDoList', []);

toDoList.controller('ToDoController', ['ToDoFactory', function (ToDoFactory) {
  var self = this;
  self.todos = [];

  self.addToDo = function(thig) {
    console.log('hi')
    self.todos.push(new ToDoFactory(thig));
  };

  self.removeToDo = function() {
    this.todos.pop();
  };
}]);



toDoList.filter('greet', function() {
  return function(name) {
    return "Hello " + name + '!';
  };
});
