import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <>
      <Card style={{ marginBottom: 10 }} className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`}>
          <Card.Img variant='top' src={product.image} />
        </Link>

        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title>{product.name}</Card.Title>
          </Link>
          <Card.Text>
            <>
              <Rating
                rating={product.rating}
                numReviews={`from ${product.numReviews} reviews`}
              />
            </>
          </Card.Text>
          <Card.Text as='h3'>${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
