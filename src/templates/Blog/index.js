import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import { PageHeader, RichText, SEO } from 'components';
import { BodyWrap } from 'components/common/Containers/styled';

const BlogTemplate = ({ data }) => {
  const { title, body, coverImage } = data.contentfulBlog;

  return (
    <MainLayout>
      <SEO />

      <PageHeader title='Blog' header={title} />

      <BodyWrap>
        {coverImage && (
          <img src={coverImage.file.url} alt='' class='cover-image' />
        )}
        <RichText {...body} />
      </BodyWrap>
    </MainLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      metaDescription
      publishedDate(formatString: "MMMM D YYYY")
      body {
        raw
      }
      coverImage {
        file {
          url
        }
      }
    }
  }
`;

export default BlogTemplate;
