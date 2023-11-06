var express = require('express');
const { createPosition } = require('../controllers/positions/create-position');
const {getPositions} = require('../controllers/positions/get-positions');
const {getPosition} = require('../controllers/positions/get-position')
var router = express.Router();

/* GET users listing. */
router.post('/create-position', createPosition);
router.get('/positions', getPositions);
router.get('/positions/:id', getPosition)

module.exports = router;
