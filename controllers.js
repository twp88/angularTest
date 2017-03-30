var toDoList = angular.module('toDoList', [])

toDoList.controller('ToDoController', ['ToDoFactory', 'GetTheList', function (ToDoFactory, GetTheList) {
  var self = this;
  self.todos = GetTheList.makeRequest();


  self.addToDo = function(text) {
    self.todos.push(new ToDoFactory(text));
  };

  self.removeToDo = function() {
    self.todos.pop();
  };

}]);
