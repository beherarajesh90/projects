const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  dueDate: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
});
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
