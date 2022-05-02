const router = require('express').Router();

router.post('/add-todo', require('../controllers/to_do_controller').addTodo);
router.get(
  '/delete-todo',
  require('../controllers/to_do_controller').deleteTodo
);
router.get(
  '/update-todo',
  require('../controllers/to_do_controller').updateTodo
);
module.exports = router;
