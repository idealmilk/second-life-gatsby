const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const res = await graphql(`
    query {
      allContentfulService {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulCaseStudy {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulSitePage {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  res.data.allContentfulService.edges.forEach((edge) => {
    createPage({
      component: path.resolve('./src/templates/Service/index.js'),
      path: `/services/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });

  res.data.allContentfulCaseStudy.edges.forEach((edge) => {
    createPage({
      component: path.resolve('./src/templates/CaseStudy/index.js'),
      path: `/case-studies/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });

  res.data.allContentfulSitePage.edges.forEach((edge) => {
    createPage({
      component: path.resolve('./src/templates/SitePage/index.js'),
      path: `/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });

  res.data.allContentfulBlog.edges.forEach((edge) => {
    createPage({
      component: path.resolve('./src/templates/Blog/index.js'),
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
