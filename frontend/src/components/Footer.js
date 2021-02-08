import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer
      style={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        height: '100px',
        width: '100%',
        textAlign: 'center',
        lineHeight: '100px',
      }}>
      <Container>
        <Row className='align-content-lg-end'>
          <Col className='text-center py-3'>Copyright &copy; Eshop</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
