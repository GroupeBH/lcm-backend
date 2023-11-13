var express = require('express');
const { createEntry } = require('../controllers/entries/create-entry');
const {getEntries} = require('../controllers/entries/get-entries')

var router = express.Router();

/* GET users listing. */
router.post('/create-Entry', createEntry);
router.get('/get-all-entries', getEntries);


module.exports = router;
