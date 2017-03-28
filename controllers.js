var toDoList = angular.module('toDoList', [])

toDoList.controller('ToDoController', ['ToDoFactory', function (ToDoFactory) {
  var self = this;
  self.todos = [];

  self.addToDo = function(text) {
    self.todos.push(new ToDoFactory(text));
  };

  self.removeToDo = function() {
    self.todos.pop();
  };
}]);
