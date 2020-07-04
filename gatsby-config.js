/**
 * Configure your Gatsby site with this file.git
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: require("./site-meta-data.json"),

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: "gatsby-remark-emojis",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it. replace with yours
        trackingId: "UA-170119924-1",
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stop Covid19`,
        short_name: `Covid19`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6f00ff`,
        display: `standalone`,
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },

    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    "gatsby-plugin-dark-mode",
    // siteURL is a must for sitemap generation
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
