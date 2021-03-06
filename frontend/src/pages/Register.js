import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Form, Button } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { register } from '../redux/actions/userActions';
import FormContainer from '../components/FormContainer';
import { Link } from 'react-router-dom';

const Register = ({ location, history }) => {
  const [email, setemail] = useState('');
  const [name, setname] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [errors, seterrors] = useState('');
  const [password, setpassword] = useState('');
  const redirect = location.search ? location.search.split('=')[1] : '/';
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { userInfo, loading, error } = user;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, redirect, userInfo]);

  const submitLoginForm = (e) => {
    e.preventDefault();
    if (!name && !email && !password) {
      seterrors('Fields Are Required');
      setTimeout(() => {
        seterrors('');
      }, 2000);
    } else if (password !== confirmPassword) {
      seterrors('Password Do Not Match');
      setTimeout(() => {
        seterrors('');
      }, 2000);
    } else {
      dispatch(register(name, email, password));
      seterrors(error);
      setTimeout(() => {
        seterrors('');
      }, 2000);
    }
  };
  return (
    <FormContainer>
      <h1>Register</h1>
      {errors && <Message variant='danger'>{errors}</Message>}
      {loading && <Loader />}
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
            onChange={(e) => setconfirmPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Register
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          Already A Customer ?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Register;
