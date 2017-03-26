app.factory('ToDoFactory', function() {
  return {
    create: function() {
      return [];
    };

    add: function(x,y) {
      return x.push({ToDo:y, done:false});
    };

    takeAway: function(x) {
      return x.pop();
    };
  }
});
