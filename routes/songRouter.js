const express = require('express');
const router = express.Router();
const songController = require('./controllers/songController');

router.get('/', songController.getAll);
router.get('/:id', songController.getById);

module.exports = router;
