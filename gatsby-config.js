module.exports = {
  siteMetadata: {
    title: `Caio Ferreira`,
    author: `Caio Ferreira`,
    description: `A place to share ideas about simple code`,
    siteUrl: `https://caioferreira.com/`,
    keywords: [
      `blog`,
      `Caio Ferreira`,
      `javascript`,
      `functional programming`,
      `software architecture`,
    ],
    social: {
      twitter: `https://twitter.com/caiorcferreira`,
      dev: "https://dev.to/caiorcferreira",
      github: "https://github.com/caiorcferreira",
      medium: "https://medium.com/@caiorcferreira",
      linkedin: "https://www.linkedin.com/in/caiorcferreira/",
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: "+",
            },
          },
          `gatsby-remark-external-links`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-137605639-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Caio Ferreira - Simple Made Daily`,
        short_name: `Caio Ferreira`,
        start_url: `/`,
        background_color: `#fdfdff`,
        theme_color: `#201b24`,
        display: `minimal-ui`,
        icon: ``,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
  ],
}
