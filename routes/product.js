var express = require('express');
const {getProducts} = require('../controllers/products/get-products')
const {getProduct} = require('../controllers/products/get-product')
const {updatePrice} = require('../controllers/products/update-price')

var router = express.Router();

/* GET users listing. */
router.get('/get-all-products', getProducts);
router.get('/products/:id', getProduct);
router.post('/update-price', updatePrice);

module.exports = router;
