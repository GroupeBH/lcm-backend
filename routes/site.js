var express = require('express');
const { createSite } = require('../controllers/sites/create-site');
const {getSites} = require('../controllers/sites/get-sites');
const {getSite} = require('../controllers/sites/get-site')
var router = express.Router();

/* GET users listing. */
router.post('/create-site', createSite);
router.get('/sites', getSites);
router.get('/sites/:id', getSite)

module.exports = router;
