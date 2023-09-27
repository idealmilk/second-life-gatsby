import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import { PageHeader, SEO } from 'components';
import { ContactForm } from 'components/common/Forms';
import { BodyWrap } from 'components/common/Containers/styled';

const ContactPage = ({ data }) => {
  const {
    title,
    header,
    metaTitle,
    metaDescription,
    metaImage,
  } = data.contentfulContactPage;
  return (
    <MainLayout>
      <SEO
        title={metaTitle}
        description={metaDescription}
        image={metaImage.file.url}
      />

      <PageHeader title={title} header={header} />

      <BodyWrap>
        <h2 style={{ textAlign: 'center', margin: '-4rem 0 4rem' }}>
          Reach out to the team
        </h2>
        <ContactForm contactType='Contact Page' />
      </BodyWrap>
    </MainLayout>
  );
};

export const query = graphql`
  query {
    contentfulContactPage {
      title
      header
      metaTitle
      metaDescription
      metaImage {
        file {
          url
        }
      }
    }
  }
`;

export default ContactPage;
