const express = require('express');

const route = express.Router();

const { loginPost } = require('../controllers/loginController');
const emailVerify = require('../middlewares/emailVerify');
const passwordVerify = require('../middlewares/passwordVerify');

route.post('/', emailVerify, passwordVerify, loginPost);

module.exports = route;