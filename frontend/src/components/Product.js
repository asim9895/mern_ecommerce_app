import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <>
      <Card style={{ marginBottom: 10 }} className='my-3 p-3 rounded'>
        <Card.Img variant='top' src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
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
