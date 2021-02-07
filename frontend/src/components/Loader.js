import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: '100px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <span className='sr-only'></span>
    </Spinner>
  );
};

export default Loader;
