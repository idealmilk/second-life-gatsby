import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import { PageHeader, RichText, SEO } from 'components';
import { BodyWrap } from 'components/common/Containers/styled';

const ServiceTemplate = ({ data }) => {
  const { title, body, image } = data.contentfulService;

  return (
    <MainLayout>
      <SEO title={title} image={image.file.url} article={true} />

      <PageHeader title='Services' header={title} />

      <BodyWrap>
        {image && <img src={image.file.url} alt='' class='cover-image' />}
        <RichText {...body} />
      </BodyWrap>
    </MainLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    contentfulService(slug: { eq: $slug }) {
      title
      body {
        raw
      }
      image {
        file {
          url
        }
      }
    }
  }
`;

export default ServiceTemplate;
