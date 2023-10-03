import React, { useState } from 'react';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import { PageHeader, SEO, ServicePreview } from 'components';

const ServicesPage = ({ data }) => {
  const { edges } = data.allContentfulService;

  const {
    title,
    header,
    metaTitle,
    metaDescription,
    metaImage,
  } = data.contentfulServicesPage;

  const [modalOpen, setModalOpen] = useState(false);
  const [clickOrigin, setClickOrigin] = useState(false);

  const handleModalOpen = (title) => {
    setModalOpen(!modalOpen);
    setClickOrigin(title);
  };

  return (
    <MainLayout
      modalOpen={modalOpen}
      parentCallback={handleModalOpen}
      clickOrigin={clickOrigin}
    >
      <SEO
        title={metaTitle}
        description={metaDescription}
        image={metaImage.file.url}
      />

      <PageHeader title={title} header={header} />

      {Object.values(edges).map((service, index) => {
        console.log(service);
        return (
          <ServicePreview
            {...service}
            callbackFunction={() => handleModalOpen(service.node.title)}
            setClickOrigin={setClickOrigin}
            key={index}
            reverse={index}
          />
        );
      })}
    </MainLayout>
  );
};

export const query = graphql`
  query {
    contentfulServicesPage {
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
    allContentfulService(sort: { fields: contentful_id, order: ASC }) {
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
