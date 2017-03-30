toDoList.factory('ToDoFactory', function() {
  ToDo = function(text, completed){
    this.text = text;
    this.completed = (typeof completed !== 'undefined') ? completed: false
    };

    ToDo.prototype.complete = function() {
      if (this.completed === false) {
        this.completed = true;
      } else if (this.completed === true) {
        this.completed = false;
      }

    };
  return ToDo;
});
