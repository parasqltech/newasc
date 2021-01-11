module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    `gatsby-plugin-smoothscroll`,
	{
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: 'staging-ascstaging.kinsta.cloud',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'https',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: true,
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
		excludedRoutes: [
		  '/*/*/media',
		],
      },
    },
	{       
		resolve: '@pasdo501/gatsby-source-woocommerce',
		options: {
			api: 'staging-ascstaging.kinsta.cloud',
			verbose: true,
			https: true,
			api_keys: {
				consumer_key: 'ck_267148935fa9cd6127b534486c64128084c56bc5',
				consumer_secret: 'cs_026a85ca972dc7ed0c2ac5d7b4fef2b412413871',
			},
			fields: ['products', 'products/categories', 'products/attributes'],
			query_string_auth: false,
			api_version: 'wc/v3',
			per_page: 100,
			wpAPIPrefix: 'wp-json',
			encoding: 'utf8',
			axios_config: {
		   
			}
		}
	},
	
	{
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
        },
        `gatsby-remark-lazy-load`,
      ]
    }
  },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fevicon.png`, // This path is relative to the root of the site.
      },
    },
	{
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'asc'
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
