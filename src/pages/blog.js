import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import { Blogs, PageHeader, SEO } from 'components';
import { TightInnerWrap } from 'components/common/Containers/styled';

const BlogPage = ({ data }) => {
  const { allContentfulBlog } = data;

  return (
    <MainLayout>
      <SEO />

      <PageHeader title='Blog' header='Read our blog' />

      <TightInnerWrap>
        <Blogs {...allContentfulBlog} />
      </TightInnerWrap>
    </MainLayout>
  );
};

export const query = graphql`
  query {
    allContentfulBlog(sort: { fields: publishedDate, order: DESC }) {
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
