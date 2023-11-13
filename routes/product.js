var express = require('express');
const {getProducts} = require('../controllers/products/get-products')
const {getProduct} = require('../controllers/products/get-product')

var router = express.Router();

/* GET users listing. */
router.get('/get-all-products', getProducts);
router.get('/products/:id', getProduct);

module.exports = router;
