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
        schema: {
          //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
          typePrefix: `Wp`,
        },
        develop: {
          //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
          hardCacheMediaFiles: true,
        },
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
        html: {
          useGatsbyImage: true,
          imageMaxWidth: 1920,
          imageQuality: 70,
          createStaticFiles: true,
          generateWebpImages: true,
        },
      },
    },
    {
      resolve: "@pasdo501/gatsby-source-woocommerce",
      options: {
        // Base URL of WordPress site
        api: "wp2.na.stronazen.pl",
        // true if using https. false otherwise.
        https: true,
        api_keys: {
          consumer_key: `ck_d2732d8e5c9f5cdd7516a7b5646d61318bbefe34`,
          consumer_secret: `cs_e92f3cb3a618b2d5654448dd015d0260e1356ac2`,
        },
        // Array of strings with fields you'd like to create nodes for...
        fields: ["products", "products/categories", "products/attributes"],
      },
    },
  ],
}
