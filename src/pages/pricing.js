import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import { PageHeader, RichText, SEO } from 'components';
import { BodyWrap, QuoteWrap } from 'components/common/Containers/styled';

const PricingPage = ({ data }) => {
  const {
    title,
    header,
    body1,
    body2,
    body3,
    quote1,
    quote2,
  } = data.contentfulPricingPage;
  return (
    <MainLayout>
      <SEO title='Pricing' />

      <PageHeader title={title} header={header} />

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
  query {
    contentfulPricingPage {
      body1 {
        raw
      }
      body2 {
        raw
      }
      body3 {
        raw
      }
      header
      quote1
      quote2
      title
    }
  }
`;

export default PricingPage;
