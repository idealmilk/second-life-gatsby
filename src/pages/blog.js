import React from 'react';

import MainLayout from 'layouts/MainLayout';
import { PageHeader, SEO } from 'components';

const BlogPage = () => {
  return (
    <MainLayout>
      <SEO />

      <PageHeader title='Blog' header='Read our blog' />
    </MainLayout>
  );
};

export default BlogPage;
