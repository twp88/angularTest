var toDoList = angular.module('toDoList' , [])

toDoList.filter('greet', function() {
  return function(name) {
    return "Hello " + name + '!';
  };
});
