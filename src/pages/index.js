import React from 'react';

import MainLayout from 'layouts/MainLayout';
import { Hero, SEO } from 'components';

const IndexPage = () => {
  return (
    <MainLayout>
      <SEO />
      <Hero />
    </MainLayout>
  );
};

export default IndexPage;
