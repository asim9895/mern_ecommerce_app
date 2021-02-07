const express = require('express');
const router = express.Router();

const Product = require('../models/Product');
const asyncHandler = require('express-async-handler');

router.get(
  '/api/products',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    if (products) {
      res.json(products);
    } else {
      res.json({ message: 'Products Not Found' });
    }
  })
);

router.get(
  '/api/products/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.param.id);

    if (product) {
      res.json(product);
    } else {
      res.json({ message: 'Product Not Found' });
    }
  })
);

module.exports = router;
