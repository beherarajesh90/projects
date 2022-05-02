const router = require('express').Router();
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.use('/todo', require('./to_do_operations'));
module.exports = router;
