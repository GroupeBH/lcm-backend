var express = require('express');
const { createUser } = require('../controllers/users/create-user');
const { getUsers } = require('../controllers/users/get-users');
var router = express.Router();

/* GET users listing. */
router.post('/postUser', createUser);
router.get('/getUsers', getUsers);

module.exports = router;
