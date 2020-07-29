require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Gustavo Abdelnour | Professional Portfolio",
    description:
      "Welcome, this is Gustavo Abdelnour's Professional Portfolio. Gustavo is a Full-Stack Software Developer and Data Scientist. Gustavo is also an entrepreneur and the CEO of BiscayneDevs.",
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: `${process.env.GATSBY_GOOGLE_ANALYTICS_ID}`,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        pageTransitionDelay: 2500,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/images/`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/portfolio/`,
        name: "portfolio",
      },
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins\:300,400,400,700,800,900`],
        display: "swap",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
