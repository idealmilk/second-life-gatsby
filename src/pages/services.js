import React, { useState } from 'react';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import { PageHeader, SEO, ServicePreview } from 'components';

const ServicesPage = ({ data }) => {
  const { edges } = data.allContentfulService;
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <MainLayout modalOpen={modalOpen} parentCallback={handleModalOpen}>
      <SEO />

      <PageHeader title='Services' header='Services for all stages of life' />

      {Object.values(edges).map((service, index) => {
        console.log(service);
        return (
          <ServicePreview {...service} callbackFunction={handleModalOpen} />
        );
      })}
    </MainLayout>
  );
};

export const query = graphql`
  query {
    allContentfulService {
      edges {
        node {
          title
          slug
          icon {
            file {
              url
            }
          }
          description {
            raw
          }
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default ServicesPage;
