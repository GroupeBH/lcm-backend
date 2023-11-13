var express = require('express');
const {getProducts} = require('../controllers/products/get-products')

var router = express.Router();

/* GET users listing. */
router.get('/get-all-products', getProducts);


module.exports = router;
