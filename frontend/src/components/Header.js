import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' fixed='top'>
        <Container>
          <Navbar.Brand href='#home'>E-shop</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='#features'>Sign In</Nav.Link>
              <Nav.Link href='#pricing'>Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
