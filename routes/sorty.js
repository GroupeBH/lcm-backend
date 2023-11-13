var express = require('express');
const { createSorty } = require('../controllers/sorties/create-sorty');
const { getSorties } = require('../controllers/sorties/get-sorties');
const { getSorty } = require('../controllers/sorties/get-sorty')

var router = express.Router();

/* GET users listing. */
router.post('/create-sorty', createSorty);
router.get('/get-all-sorties', getSorties);
router.get('/sorties/:id', getSorty)


module.exports = router;
