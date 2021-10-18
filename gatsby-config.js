module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url:
          // allows a fallback url if WPGRAPHQL_URL is not set in the env, this may be a local or remote WP instance.
          process.env.WPGRAPHQL_URL || `https://wp2.na.stronazen.pl/graphql`,
        protocol: "https",
        schema: {
          //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
          typePrefix: `Wp`,
        },
        develop: {
          //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
          hardCacheMediaFiles: true,
        },
        plugins: [
          {
            resolve: `@draftbox-co/gatsby-wordpress-inline-images`,
            options: {
              baseUrl: `https://wp2.na.stronazen.pl/graphqlg`,
              protocol: `https`,
            },
          },
        ],
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },
        },
        maxWidth: 650,
        wrapperStyle: ``,
        postTypes: ["post", "page"],
        backgroundColor: `white`,
        withWebp: true, // enable WebP files generation
        useACF: false, // process <img> tags in ACF fields too
      },
    },
  ],
}
