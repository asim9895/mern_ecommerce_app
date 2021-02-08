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

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type, Authorization'
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use('', product);
app.use('/api', user);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
