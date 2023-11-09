var express = require('express');
const createRole = require('../controllers/roles/create-role');
var router = express.Router();

router.post('/createRole', createRole);

module.exports = router;

