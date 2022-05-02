const Todo = require('../models/todo');

module.exports.home = function (req, res) {
  Todo.find({}, (err, tasks) => {
    if (err) {
      console.log(`Failed to fetch tasks : ${err}`);
      return;
    }
    return res.render('../views/home.ejs', { tasks: tasks });
  });
};
