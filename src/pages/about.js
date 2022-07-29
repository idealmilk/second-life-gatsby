import React from 'react';

import MainLayout from 'layouts/MainLayout';
import { PageHeader, SEO } from 'components';

const AboutUsPage = () => {
  return (
    <MainLayout>
      <SEO />

      <PageHeader title='About' header='About' />
    </MainLayout>
  );
};

export default AboutUsPage;
