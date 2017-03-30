toDoList.service('GetTheList', ['$http', 'ToDoFactory', function($http, ToDoFactory){

  this.makeRequest = function() {
    var todos = []
    $http.get('http://quiet-beach-24792.herokuapp.com/todos.json').then( function(response){
      response.data.forEach(function(entry){
        todos.push(new ToDoFactory(entry.text, entry.completed));
      });
    }, function(err){
      console.log('Failed request')
    })
    return todos
    }

}]);
