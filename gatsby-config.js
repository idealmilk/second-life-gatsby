const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'SciLeads',
    titleTemplate: '',
    description: 'Increase Scientific Leads',
    siteUrl: 'http://scileads.com',
    image: '/imgs/logo.png',
    linkedIn: 'https://www.linkedin.com/company/scileads/mycompany',
  },
  proxy: [
    {
      prefix: '/api',
      url: 'http://localhost:5000',
    },
  ],
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: 'https://scileads.com',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'http://scileads.com',
        sitemap: 'http://scileads.com/sitemap.xml',
        policy: [
          {
            userAgent: '*',
            allow: '/',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        assets: path.join(__dirname, 'src/assets'),
        components: path.join(__dirname, 'src/components'),
        layouts: path.join(__dirname, 'src/layouts'),
        pages: path.join(__dirname, 'src/pages'),
        styles: path.join(__dirname, 'src/styles'),
        templates: path.join(__dirname, 'src/templates'),
        utils: path.join(__dirname, 'src/utils'),
      },
    },
  ],
};
