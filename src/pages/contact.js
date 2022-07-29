import React from 'react';

import MainLayout from 'layouts/MainLayout';
import { PageHeader, SEO } from 'components';

const ContactPage = ({ data }) => {
  return (
    <MainLayout>
      <SEO />

      <PageHeader title='Contact' header='Contact' />
    </MainLayout>
  );
};

export default ContactPage;
