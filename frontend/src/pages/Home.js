import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { product_list } from '../redux/actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const Home = () => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product);

  const { products, loading, error } = product;

  useEffect(() => {
    dispatch(product_list());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products &&
            products.map((product, index) => (
              <Col sm={12} md={6} lg={4} key={index}>
                <Product product={product} />
              </Col>
            ))}
        </Row>
      )}
    </>
  );
};

export default Home;
