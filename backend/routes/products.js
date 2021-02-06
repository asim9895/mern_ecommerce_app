const express = require('express');
const router = express.Router();
const products = require('../data/products');

router.get('/api/products', async (req, res) => {
  try {
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).send('server error');
  }
});

router.get('/api/products/:id', async (req, res) => {
  try {
    const product = products.find((product) => product._id === req.params.id);
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).send('server error');
  }
});

module.exports = router;
