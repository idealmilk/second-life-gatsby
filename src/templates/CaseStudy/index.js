import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import { PageHeader, RichText, SEO } from 'components';
import { BodyWrap, QuoteWrap } from 'components/common/Containers/styled';

import { CustomerName } from './styled';

const CaseStudyTemplate = ({ data }) => {
  const {
    title,
    customerNames,
    customerImage,
    body1,
    body2,
    body3,
    quote1,
    quote2,
  } = data.contentfulCaseStudy;

  return (
    <MainLayout>
      <SEO />

      <PageHeader title='Case Studies' header={title} image={customerImage} />

      <CustomerName>
        <p>{customerNames}</p>
      </CustomerName>

      {body1 && (
        <BodyWrap>
          <RichText {...body1} />
        </BodyWrap>
      )}

      {quote1 && (
        <QuoteWrap color='sand'>
          <p>{quote1}</p>
        </QuoteWrap>
      )}

      {body2 && (
        <BodyWrap>
          <RichText {...body2} />
        </BodyWrap>
      )}

      {quote2 && (
        <QuoteWrap color='green'>
          <p>{quote2}</p>
        </QuoteWrap>
      )}

      {body3 && (
        <BodyWrap>
          <RichText {...body3} />
        </BodyWrap>
      )}
    </MainLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    contentfulCaseStudy(slug: { eq: $slug }) {
      title
      customerNames
      customerImage {
        file {
          url
        }
      }
      body1 {
        raw
      }
      body2 {
        raw
      }
      body3 {
        raw
      }
      quote1
      quote2
    }
  }
`;

export default CaseStudyTemplate;
