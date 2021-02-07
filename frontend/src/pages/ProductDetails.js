import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Button,
  Form,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { single_product } from '../redux/actions/productActions';
import Rating from '../components/Rating';
import Loader from '../components/Loader';

const ProductDetails = ({ match, history }) => {
  const [qty, setqty] = useState(1);
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product);

  const { singleProduct, loading } = product;

  useEffect(() => {
    dispatch(single_product(match.params.id));
  }, [dispatch, match]);

  const addToCart = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        singleProduct && (
          <Row>
            <Col md={6}>
              <Image src={singleProduct.image} alt={singleProduct.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{singleProduct.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>Description: {singleProduct.description}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    rating={singleProduct.rating}
                    numReviews={`from ${singleProduct.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  <h2>Price: ${singleProduct.price}</h2>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>${singleProduct.price}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {singleProduct.countInStock > 0
                          ? 'In stock'
                          : 'Out of stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  {singleProduct.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setqty(e.target.value)}>
                            {[...Array(singleProduct.countInStock).keys()].map(
                              (x) => {
                                return (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                );
                              }
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  <ListGroup.Item>
                    <Button
                      className='btn-block'
                      type='Button'
                      onClick={addToCart}>
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        )
      )}
    </>
  );
};

export default ProductDetails;
