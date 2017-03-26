var toDoList = angular.module('toDoList', []);

toDoList.controller('ToDoController', ["$scope", function($scope){
  $scope.todos = [
    {ToDo:'Thingy', done:false},
    {ToDo:'Freemy', done:false},
    {ToDo:'Freemy', done:true},
    {ToDo:'Freemy', done:false}
  ];

  $scope.addToDo = function(thig) {
    $scope.todos.push({ToDo:thig, done:false});
  };

  $scope.removeToDo = function() {
    $scope.todos.pop();
  };
}]);



toDoList.filter('greet', function() {
  return function(name) {
    return "Hello " + name + '!';
  };
});
