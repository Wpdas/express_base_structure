const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');

router.get('/', userController.getUsers);
router.get('/total', userController.getTotal);
router.get('/:id', userController.getUserById);

module.exports = router;
