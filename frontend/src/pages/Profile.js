import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Form, Button } from 'react-bootstrap';

import Message from '../components/Message';
import {
  get_user_details,
  update_user_details,
} from '../redux/actions/userActions';

const Profile = ({ history, location }) => {
  const [email, setemail] = useState('');
  const [name, setname] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [errors, seterrors] = useState('');
  const [password, setpassword] = useState('');
  const [status, setstatus] = useState('');

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userDetail = useSelector((state) => state.userDetail);
  const { userDetails, updateStatus } = userDetail;
  const { userInfo, error } = user;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      if (!userDetails) {
        dispatch(get_user_details('profile'));
      } else {
        setname(userDetails.name);
        setemail(userDetails.email);
      }
    }
  }, [dispatch, history, userDetails, userInfo]);

  const submitLoginForm = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      seterrors('Password Do Not Match');
      setTimeout(() => {
        seterrors('');
      }, 2000);
    } else {
      dispatch(
        update_user_details({
          _id: userDetail._id,
          name,
          email,
          password,
        })
      );
      seterrors(error);
      setTimeout(() => {
        seterrors('');
      }, 2000);
      setstatus(updateStatus);
      setTimeout(() => {
        setstatus('');
      }, 2000);
    }
  };
  return (
    <Row>
      <Col md={4}>
        <h1>Update User</h1>
        {status && <Message variant='primary'>{status}</Message>}
        {errors && <Message variant='danger'>{errors}</Message>}

        <Form onSubmit={submitLoginForm}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Name'
              value={name}
              onChange={(e) => setname(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter Email'
              value={email}
              onChange={(e) => setemail(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter Email'
              value={password}
              onChange={(e) => setpassword(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm Your Password'
              value={confirmPassword}
              onChange={(e) =>
                setconfirmPassword(e.target.value)
              }></Form.Control>
          </Form.Group>
          <Button variant='primary' type='submit'>
            Update User
          </Button>
        </Form>
      </Col>
      <Col md={8}>
        <h2>Orders</h2>
      </Col>
    </Row>
  );
};

export default Profile;
