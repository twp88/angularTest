toDoList.factory('ToDoFactory', function() {
  ToDo = function(text, completed){
    this.text = text;
    this.completed = (typeof completed !== 'undefined') ? completed: false
    };

    ToDo.prototype.complete = function() {
      this.completed = true;
    };
  return ToDo;
});
