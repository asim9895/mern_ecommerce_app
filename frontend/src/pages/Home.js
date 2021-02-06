import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const Home = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product, index) => (
          <Col sm={12} md={6} lg={4} key={index}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;