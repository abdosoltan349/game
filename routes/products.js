const express = require('express');
const router = express.Router();
const productsmodel = require('./../models/products-model');
router.get('/products', (req, res, next) => {
    res.render('products', productsmodel.getallproducts())
})
module.exports = router;