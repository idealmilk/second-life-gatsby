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
    }
  `);

  console.log(res);

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
};
