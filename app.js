toDoFactory.factory('ToDoFactory', function() {
  ToDo = function(text, completed){
    this.text = text;
    this.completed = (typeof completed !== 'undefined') ? completed: false
    };

    ToDo.prototype.complete = function(x) {
      this.completed = true;
    };
  return ToDo;
  });
