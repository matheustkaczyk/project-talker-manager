const express = require('express');

const router = express.Router();

const { getAll } = require('../controllers/talkerController');

router.get('/', getAll);

module.exports = router;