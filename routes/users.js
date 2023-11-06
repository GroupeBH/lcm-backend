var express = require('express');
const { createUser } = require('../controllers/users/create-user');
const { getUsers } = require('../controllers/users/get-users');
const login = require('../controllers/auth/login');
var router = express.Router();

/* GET users listing. */
router.post('/postUser', createUser);
router.get('/getUsers', getUsers);
router.post('/auth/login', login);

module.exports = router;
