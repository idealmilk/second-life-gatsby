import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import {
  PageHeader,
  RichText,
  SEO,
  TeamMembers,
  Testimonials,
} from 'components';

import { FeatureWrap, TextWrap } from 'components/common/Containers/styled';

const AboutPage = ({ data }) => {
  const {
    contentfulAboutPage,
    allContentfulTeamMember,
    allContentfulTestimony,
  } = data;

  const {
    title,
    header,
    metaTitle,
    metaDescription,
    metaImage,
    description,
    body1,
    body2,
    body3,
    image1,
    image2,
    image3,
  } = contentfulAboutPage;

  const features = [
    { body: body1, image: image1 },
    { body: body2, image: image2 },
    { body: body3, image: image3 },
  ];

  return (
    <MainLayout>
      <SEO
        title={metaTitle}
        description={metaDescription}
        image={metaImage.file.url}
      />

      <PageHeader title={title} header={header} />

      <TextWrap style={{ marginBottom: '10rem' }}>
        <RichText {...description} />
      </TextWrap>

      {features.map((feature, index) => {
        console.log(index);
        return (
          <FeatureWrap pos={index} reverse={index}>
            <RichText {...feature.body} />
            <img
              src={feature.image.file.url}
              alt='Feature'
              class={
                feature.image.file.url.includes('WebIcons')
                  ? 'web-icon'
                  : 'drop-shadow'
              }
            />
          </FeatureWrap>
        );
      })}

      <Testimonials {...allContentfulTestimony} />

      <TeamMembers {...allContentfulTeamMember} />
    </MainLayout>
  );
};

export const query = graphql`
  query {
    contentfulAboutPage {
      title
      header
      metaTitle
      metaDescription
      metaImage {
        file {
          url
        }
      }
      body1 {
        raw
      }
      body2 {
        raw
      }
      body3 {
        raw
      }
      description {
        raw
      }
      image1 {
        file {
          url
        }
      }
      image2 {
        file {
          url
        }
      }
      image3 {
        file {
          url
        }
      }
    }
    allContentfulTestimony {
      edges {
        node {
          body {
            body
          }
          customerName
        }
      }
    }
    allContentfulTeamMember {
      edges {
        node {
          body {
            raw
          }
          headshot {
            file {
              url
            }
          }
          jobTitle
          name
        }
      }
    }
  }
`;

export default AboutPage;
