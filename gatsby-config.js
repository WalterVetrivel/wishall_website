const apiInfo = require('./api-config');
module.exports = {
	siteMetadata: {
		title: `WISHALL`,
		description: `Women In Self-Help Action in Lord's Love.`,
		author: `Walter Selvakumar`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
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
				icon: `src/images/logo.png`
			}
		},
		{
			resolve: `gatsby-source-graphcms`,
			options: {
				endpoint: apiInfo.url,
				token: apiInfo.token,
				query: apiInfo.query
			}
		},
		{
			resolve: 'gatsby-plugin-mailchimp',
			options: {
				endpoint:
					'https://facebook.us20.list-manage.com/subscribe/post?u=7d9f85283408e891ee2be69b0&amp;id=4098b773ab'
			}
		}
	]
};
