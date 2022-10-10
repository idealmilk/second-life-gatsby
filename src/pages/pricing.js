import React from 'react';

import MainLayout from 'layouts/MainLayout';
import { PageHeader, SEO } from 'components';

const PricingPage = () => {
  return (
    <MainLayout>
      <SEO />

      <PageHeader
        title='Pricing'
        header='
We have a completely different charging model.'
      />
    </MainLayout>
  );
};

export default PricingPage;
