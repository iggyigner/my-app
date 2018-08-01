module.exports = {
  siteMetadata: {
    title: 'Iggy Learns React',
    description: '1PW container for all code and design projects for Jonathan Iggy Igner.',
    keywords: 'design technologist, ux design, ui design, react'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 's48byjlhwmwj',
        accessToken: '78673c74a3320bb53f408f5d2d604845f388f54dfb7236080e6cf926fb6b2144'
      }
    }
  ],
}
