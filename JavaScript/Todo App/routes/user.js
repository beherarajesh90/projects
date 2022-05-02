const router = require('express').Router();

const userController = require('../controllers/user_controller');

router.get('/profile', userController.user);

module.exports = router;
