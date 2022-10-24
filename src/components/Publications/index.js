import React from 'react';
import { Link } from 'gatsby';

import { TightInnerWrap } from 'components/common/Containers/styled';
import { Button } from 'components/common/Buttons';

import { Container, LogoWrap, Logo, IconWrap } from './styled';

const Publications = ({ edges }) => {
  return (
    <Container>
      <TightInnerWrap>
        <h2>As featured in</h2>
        <LogoWrap>
          {Object.values(edges.reverse()).map((publication, index) => {
            return (
              <Logo key={index}>
                <img
                  src={publication.node.logo.file.url}
                  alt={`Logo ${index}`}
                />
              </Logo>
            );
          })}
        </LogoWrap>
      </TightInnerWrap>
    </Container>
  );
};

export default Publications;
