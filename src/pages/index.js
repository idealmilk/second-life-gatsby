import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import {
  CaseStudies,
  Hero,
  Publications,
  RichText,
  SEO,
  Services,
  Video,
} from 'components';
import { TextWrap, FeatureWrap } from 'components/common/Containers/styled';

const StyledTextWrap = styled(TextWrap)`
  margin: -2rem auto 20rem;
`;

const HomePage = ({ data }) => {
  const {
    contentfulHomePage,
    contentfulHero,
    allContentfulService,
    allContentfulCaseStudy,
    allContentfulPublication,
  } = data;

  const [email, setEmail] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  const {
    metaTitle,
    metaDescription,
    metaImage,
    featuresList,
    founderSectionBody,
    founderSectionHeader,
    serviceSectionHeader,
    serviceSectionBody,
    topSectionBody,
    topSectionHeader,
    videoEmbed,
    founderSectionImage,
  } = contentfulHomePage;

  return (
    <MainLayout
      parentCallback={handleModalOpen}
      modalOpen={modalOpen}
      email={email}
    >
      <SEO
        title={metaTitle}
        description={metaDescription}
        image={metaImage.file.url}
      />

      <Hero
        {...contentfulHero}
        setEmailCallback={setEmail}
        toggleModalOpen={handleModalOpen}
      />

      <StyledTextWrap>
        <h2>{topSectionHeader}</h2>
        <RichText {...topSectionBody} />
      </StyledTextWrap>

      <Services
        header={serviceSectionHeader}
        body={serviceSectionBody}
        {...allContentfulService}
      />

      <Video video={videoEmbed} list={featuresList} />

      <CaseStudies {...allContentfulCaseStudy} />

      <h2
        style={{
          textAlign: 'center',
          margin: '0 auto 4rem',
          width: '42rem',
          maxWidth: '90%',
        }}
      >
        {founderSectionHeader}
      </h2>

      <FeatureWrap>
        <RichText {...founderSectionBody} />
        <img
          src={founderSectionImage.file.url}
          alt='Founder'
          class='drop-shadow'
        />
      </FeatureWrap>

      <Publications {...allContentfulPublication} />
    </MainLayout>
  );
};

export const query = graphql`
  query {
    contentfulHomePage {
      metaTitle
      metaDescription
      metaImage {
        file {
          url
        }
      }
      featuresList
      founderSectionBody {
        raw
      }
      serviceSectionHeader
      serviceSectionBody
      founderSectionHeader
      topSectionBody {
        raw
      }
      topSectionHeader
      videoEmbed
      founderSectionImage {
        file {
          url
        }
      }
    }
    contentfulHero {
      header
      subheader
      backgroundImage {
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
        }
      }
    }
    allContentfulCaseStudy(sort: { fields: order, order: ASC }) {
      edges {
        node {
          title
          slug
          description
          customerNames
          customerImage {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulPublication(sort: { fields: contentful_id, order: ASC }) {
      edges {
        node {
          logo {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default HomePage;
