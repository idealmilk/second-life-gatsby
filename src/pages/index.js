import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import { CaseStudies, Hero, RichText, SEO, Services, Video } from 'components';
import {
  TextWrap,
  AboutFeatureWrap,
} from 'components/common/Containers/styled';

const StyledTextWrap = styled(TextWrap)`
  margin: -2rem auto 20rem;
`;

const HomePage = ({ data }) => {
  const {
    contentfulHome,
    contentfulHero,
    allContentfulService,
    allContentfulCaseStudy,
  } = data;

  const {
    featuresList,
    founderSectionBody,
    founderSectionHeader,
    topSectionBody,
    topSectionHeader,
    videoEmbed,
    founderSectionImage,
  } = contentfulHome;

  return (
    <MainLayout>
      <SEO />
      <Hero {...contentfulHero} />

      <StyledTextWrap>
        <h2>{topSectionHeader}</h2>
        <RichText {...topSectionBody} />
      </StyledTextWrap>

      <Services {...allContentfulService} />

      <Video video={videoEmbed} list={featuresList} />

      <CaseStudies {...allContentfulCaseStudy} />

      <h2 style={{ textAlign: 'center', marginBottom: '8rem' }}>
        {founderSectionHeader}
      </h2>

      <AboutFeatureWrap>
        <RichText {...founderSectionBody} />
        <img
          src={founderSectionImage.file.url}
          alt='Founder'
          class='drop-shadow'
        />
      </AboutFeatureWrap>
    </MainLayout>
  );
};

export const query = graphql`
  query {
    contentfulHome {
      featuresList
      founderSectionBody {
        raw
      }
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
        }
      }
    }
    allContentfulCaseStudy {
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
  }
`;

export default HomePage;
