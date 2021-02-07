const express = require('express');
const product = require('../routes/products');
const user = require('../routes/user');
const connectDb = require('../database/mongodb');
const { notFound, errorHandler } = require('../middleware/errorMiddleware');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 3400;

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('', product);
app.use('/api', user);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
