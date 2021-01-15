require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Creative Portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
    resolve: `gatsby-source-datocms`,
    options: {
      apiToken: `c35d58a44db84ab438c5d11e117826`,
      preview: false,
      disableLiveReload: false,
      },
    },
  ],
}
