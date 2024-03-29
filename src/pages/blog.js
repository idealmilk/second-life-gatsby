import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import { Blogs, PageHeader, SEO } from 'components';
import { TightInnerWrap } from 'components/common/Containers/styled';

const BlogPage = ({ data }) => {
  const { contentfulBlogPage, allContentfulBlogPost } = data;
  const {
    title,
    header,
    metaTitle,
    metaDescription,
    metaImage,
  } = contentfulBlogPage;

  console.log(allContentfulBlogPost);

  return (
    <MainLayout>
      <SEO
        title={metaTitle}
        description={metaDescription}
        image={metaImage.file.url}
      />

      <PageHeader title={title} header={header} />

      <TightInnerWrap>
        <Blogs {...allContentfulBlogPost} />
      </TightInnerWrap>
    </MainLayout>
  );
};

export const query = graphql`
  query {
    contentfulBlogPage {
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
    allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          title
          publishedDate(formatString: "MMMM Do YYYY")
          slug
          author
          coverImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default BlogPage;
