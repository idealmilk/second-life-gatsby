import React from 'react';

import MainLayout from 'layouts/MainLayout';
import { PageHeader, SEO } from 'components';

const NewsPage = () => {
  return (
    <MainLayout>
      <SEO />

      <PageHeader title='FAQs' header='FAQs' />
    </MainLayout>
  );
};

export default NewsPage;
