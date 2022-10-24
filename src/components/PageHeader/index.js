import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Container, Circle, ImageOverlay, InnerWrap } from './styled';

const PageHeader = ({ title, header, image }) => {
  const { backgroundImage } = useStaticQuery(query).contentfulHero;

  console.log(backgroundImage);
  return (
    <Container>
      <Circle />
      <ImageOverlay backgroundImage={backgroundImage.file.url} />
      <InnerWrap>
        <h4>{title}</h4>
        <h1>{header}</h1>

        {image && <img src={image.file.url} alt='' />}
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
