module.exports = {
  siteMetadata: {
    title: `ILEditor 2`,
    description: `Bring your development up to speed with the fastest, most advanced tool for IBM i development yet.`,
    author: `@ileditor2`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ILEditor2`,
        short_name: `ILEditor2`,
        start_url: `/`,
        background_color: `#0065FF`,
        theme_color: `#0065FF`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
