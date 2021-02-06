import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Product = ({ product }) => {
  return (
    <>
      <Card style={{ marginBottom: 10 }} className='my-3 p-3 rounded'>
        <Card.Img variant='top' src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            <div className='my-3'>
              {product.rating} from {product.numReviews} reviews
            </div>
          </Card.Text>
          <Card.Text as='h3'>${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
