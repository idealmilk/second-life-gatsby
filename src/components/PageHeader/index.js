import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Container, InnerWrap } from './styled';

const PageHeader = ({ title, header }) => {
  const { backgroundImage } = useStaticQuery(query).contentfulHero;

  console.log(backgroundImage);
  return (
    <Container>
      <InnerWrap title={title}>
        {title && <h4>{title}</h4>}
        {header && <h1>{header}</h1>}
      </InnerWrap>
    </Container>
  );
};

const query = graphql`
  query {
    contentfulHero {
      backgroundImage {
        file {
          url
        }
      }
    }
  }
`;

export default PageHeader;
