import React from 'react';

import { Container, InnerWrap } from './styled';

const PageHeader = ({ title, header }) => {
  return (
    <Container>
      <InnerWrap>
        <h4>{title}</h4>
        <h1>{header}</h1>
      </InnerWrap>
    </Container>
  );
};

export default PageHeader;
