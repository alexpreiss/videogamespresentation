module.exports = {
  siteMetadata: {
    title: `Video Game Presentation`,
    description: `Video games are the real deal man!`,
    author: "Alex Preiss dawg",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Video Game Presentation`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
        short_name: `Video Games`,
        start_url: `/`,
        background_color: `#add8e6`,
        theme_color: `#fadadd`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
