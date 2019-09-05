module.exports = {
  siteMetadata: {
    title: `REGNBUE OG GLITTER FORESTILLING 🌈✨`,
    description: `REGNBUE OG GLITTER FORESTILLING 🌈✨ AV LILLIAN RAAE-VEA.`,
    author: `@olavea`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `REGNBUE OG GLITTER FORESTILLING 🌈✨ AV LILLIAN RAAE-VEA`,
        short_name: `REGNBUE`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `book/images/LillianRegnbue.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `@olavea/gatsby-theme-picture-book`,
      options: {
        basePath: `/`,
        imagePath: `book/images`,
        audioPath: `book/audio`,
        infoLink: {
          title: "gatsby-theme-picture-book on GitHub",
          url: `https://github.com/olavea/gatsby-theme-picture-book.git`,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
