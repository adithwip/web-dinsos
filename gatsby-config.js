/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Dinas Sosial DKI Jakarta`,
    siteUrl: `https://naughty-booth-62a601.netlify.com`,
    image: `./static/images/blog-image.jpg`,
  },
  plugins: [
    `gatsby-plugin-lodash`,
    {
      resolve: `gatsby-plugin-html-attributes`,
      options: {
        lang: `id`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        theme: {
          palette: {
            primary: {
              main: '#1572e8'
            },
            secondary: {
              main: '#f03a47'
            },
          }
        },
        stylesProvider: {
          injectFirst: true
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pusdatin Dinsos`,
        short_name: `Pusdatin Dinsos`,
        start_url: `/`,
        background_color: `#3177cc`,
        theme_color: `#3177cc`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // 💡 The offline plugin should be listed after the manifest plugin
    // so that the offline plugin can cache the created manifest.webmanifest.
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    //... other plugins
  ],
}
