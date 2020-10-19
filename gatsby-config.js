module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `catherine-siller/content/posts/blog`,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Catherine Siller Blog`,
    author: `Catherine Siller`,
    description: `My site description...`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/cathysiller`,
      },
    ],
  },
}
