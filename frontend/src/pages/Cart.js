import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_cart_item, delete_cart_item } from '../redux/actions/cartActions';
import { Row, Col, ListGroup, Image, Form, Button } from 'react-bootstrap';
import Message from '../components/Message';
import { Link } from 'react-router-dom';

const Cart = ({ match, location }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  useEffect(() => {
    if (productId) {
      dispatch(add_cart_item(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeCartItem = (id) => {
    dispatch(delete_cart_item(id));
  };

  return (
    <>
      <h1>Cart Items</h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <Message>Cart is Empty</Message>
          ) : (
            <ListGroup variant='flush'>
              {cartItems.map((item) => {
                return (
                  <ListGroup.Item key={item.product}>
                    <Row>
                      <Col md={2}>
                        <Image src={item.image} fluid></Image>
                      </Col>
                      <Col md={3}>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Col>
                      <Col md={2}>${item.price}</Col>
                      <Col>
                        <Form.Control
                          as='select'
                          value={item.qty}
                          onChange={(e) =>
                            dispatch(
                              add_cart_item(
                                item.product,
                                Number(e.target.value)
                              )
                            )
                          }>
                          {[...Array(item.countInStock).keys()].map((x) => {
                            return (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            );
                          })}
                        </Form.Control>
                      </Col>
                      <Col md={2}>
                        <Button
                          type='button'
                          variant='light'
                          onClick={() => removeCartItem(item.product)}>
                          <i className='fas fa-trash'></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          )}
        </Col>
        <Col md={2}></Col>
        <Col md={2}></Col>
      </Row>
    </>
  );
};

export default Cart;
