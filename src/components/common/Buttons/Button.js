import React from 'react';

import { Container } from './styled';

const Button = ({ color, onClick, children }) => {
  return (
    <Container color={color} onClick={onClick}>
      {children ? children : 'Get in touch'}
    </Container>
  );
};

export default Button;
