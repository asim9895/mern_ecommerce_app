// 'mongodb+srv://asim:asim7648@ecommerceapp.1bhi5.mongodb.net/<dbname>?retryWrites=true&w=majority';

const express = require('express');
const product = require('../routes/products');

const app = express();
const port = process.env.PORT || 3400;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('', product);

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
