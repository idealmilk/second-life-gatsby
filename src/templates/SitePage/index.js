import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import { PageHeader, RichText, SEO } from 'components';
import { BodyWrap } from 'components/common/Containers/styled';

const SitePageTemplate = ({ data }) => {
  const { title, body } = data.contentfulSitePage;

  return (
    <MainLayout>
      <SEO />

      <PageHeader header={title} />

      {body && (
        <BodyWrap>
          <RichText {...body} />
        </BodyWrap>
      )}
    </MainLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    contentfulSitePage(slug: { eq: $slug }) {
      title
      body {
        raw
      }
    }
  }
`;

export default SitePageTemplate;
