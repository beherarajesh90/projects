const Todo = require('../models/todo');

function addTodo(req, res) {
  Todo.create(req.body, (err, newTodo) => {
    if (err) {
      console.log('Cannot create new task : ${err}');
      return;
    }
    return res.redirect('back');
  });
}
function deleteTodo(req, res) {
  console.log(req.query.arr);
  const taskIds = req.query.arr.split(',');
  console.log(taskIds);
  taskIds.forEach((id) => {
    Todo.findByIdAndDelete(id, (err) => {
      if (err) {
        console.log(`Unable to delete: ${err}`);
        return;
      }
      console.log('Deleted task with id ' + id);
    });
  });
  return res.redirect('back');
}
function updateTodo(req, res) {
  const task = req.query.task.split(',');
  console.log(task);
  if (task[1] === 'false') task[1] = '';
  task[1] = Boolean(task[1]);
  // console.log(!task[1]);
  Todo.findByIdAndUpdate(task[0], { isDone: !task[1] }, (err) => {
    if (err) {
      console.log(`Unable to update: ${err}`);
      return;
    }
    console.log(`Updated task with id ${task[0]}`);
  });
  return res.redirect('/');
}
module.exports = { addTodo, deleteTodo, updateTodo };
