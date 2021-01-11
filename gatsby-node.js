const _ = require('lodash')
const path = require('path')
const slash = require('slash')
const { createFilePath } = require('gatsby-source-filesystem')
const { paginate } = require('gatsby-awesome-pagination')
const axios = require('axios');
const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')


const getData = async () => {
  var a =  axios({
		url: 'https://staging-ascstaging.kinsta.cloud/graphql',
		method: 'post',
		data: {
			query: `
				query MyQuery {
				  page(id: 76247, idType: DATABASE_ID) {
					id
					home {
					  fieldGroupName
					  homeSlider {
						title
						content
						sliderImage {
						  sourceUrl(size: LARGE)
						}
					  }
					   bottomKidsReview {
						desc
						subTitle1
						subTitle2
						image {
						  sourceUrl(size: LARGE)
						}
					  }
					  schoolHolidayProgram {
						desc
						subTitle
						title
						image {
						  sourceUrl(size: LARGE)
						}
					  }
					  asSeenOn {
						image {
						  sourceUrl(size: LARGE)
						}
					  }
					   howDoesItWork {
						desc
						title
						youtubeUrl
					  }
					  panels {
						... on Page_Home_Panels_Featured {
						  content
						  earlyBird
						  heroImage {
							sourceUrl(size: LARGE)
						  }
						  backgroundImage {
							uri
							sourceUrl
						  }
						}
						... on Page_Home_Panels_Content {
						  containerId
						  fieldGroupName
						  rowClass
						  column {
							fieldGroupName
							numberOfColumns
							text
							youtube
							cssClass
						  }
						  backgroundImage {
							sourceUrl(size: LARGE)
						  }
						}
						... on Page_Home_Panels_Camps {
						  fieldGroupName
						  sectionTitle
						  camp {
							fieldGroupName
							link {
							  ... on Page {
								id
								link
								title(format: RENDERED)
							  }
							}
							image {
							  sourceUrl(size: LARGE)
							}
							smallDesc
						  }
						}
						... on Page_Home_Panels_WhatsIncluded {
						  fieldGroupName
						  sectionTitle
						  inclusion {
							title
							fieldGroupName
							image {
							  sourceUrl(size: LARGE)
							}
						  }
						}
						... on Page_Home_Panels_HallOfFame {
						  fieldGroupName
						  sectionTitle
						  subtitle
						  star {
							description
							image {
							  sourceUrl(size: LARGE)
							}
							fieldGroupName
							name
						  }
						}
					  }
					}
					isFrontPage
				  }
			}
			`
		}
	});
	return a;
};   
  
exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions
	
	/* BLOG */
	const allWordpressPost = await graphql(`
		{
			allWordpressPost{
				edges {
					node {
						id
						title
						slug
						categories{
						  id
						  name
						  slug
						}
					}
				}
			}
		}
	`)
	
	const postTemplate = path.resolve(`./src/templates/blog_details.js`);
	const blogTemplate = path.resolve(`./src/templates/blog.js`);
	allWordpressPost.data.allWordpressPost.edges.forEach((edge,index) => {
		  createPage({
		  path: `/blog/${edge.node.slug}/`,
		  component: slash(postTemplate),
		  context: {
			id: edge.node.id
		  },
		})			  
	})
	
	const posts = allWordpressPost.data.allWordpressPost.edges;
	paginate({
		createPage,
		items: posts,
		itemsPerPage: 10,
		pathPrefix: '/blog',
		component: blogTemplate,
	});
	
	
	/* GUIDE */
	const allWordpressguide = await graphql(`
		{
			allWordpressWpCpt150461 {
				edges {
					node {
						id
						acf {
							featured_image
						}
						date(formatString: "D MMMM, Y")
						author {
							name
						}
						slug
						title
						content
					}
				}
			}
		}
	`)
	const guideTemplate = path.resolve(`./src/templates/guide_details.js`);
	const guidelistTemplate = path.resolve(`./src/templates/guide.js`);
	allWordpressguide.data.allWordpressWpCpt150461.edges.forEach((edge,index) => {
		  createPage({
		  path: `/guide/${edge.node.slug}/`,
		  component: slash(guideTemplate),
		  context: {
			id: edge.node.id
		  },
		})			  
	})
	
	const guides = allWordpressguide.data.allWordpressWpCpt150461.edges;
	paginate({
		createPage,
		items: guides,
		itemsPerPage: 10,
		pathPrefix: '/guide',
		component: guidelistTemplate,
	});
	
	
	/* FLYER */
	const allWordpressflyer = await graphql(`
		{
			allWordpressWpCpt150963 {
				edges {
					node {
						id
						acf {
							featured_image
						}
						date(formatString: "D MMMM, Y")
						author {
							name
						}
						slug
						title
						content
					}
				}
			}
		}
	`)
	const flyerTemplate = path.resolve(`./src/templates/flyer_details.js`);
	const flyerlistTemplate = path.resolve(`./src/templates/flyer.js`);
	allWordpressflyer.data.allWordpressWpCpt150963.edges.forEach((edge,index) => {
		  createPage({
		  path: `/flyer/${edge.node.slug}/`,
		  component: slash(flyerTemplate),
		  context: {
			id: edge.node.id
		  },
		})			  
	})
	const flyers = allWordpressflyer.data.allWordpressWpCpt150963.edges;
	paginate({
		createPage,
		items: flyers,
		itemsPerPage: 10,
		pathPrefix: '/flyer',
		component: flyerlistTemplate,
	});
	
	/* PRODUCT */
	const products = await graphql(`
		{
			allWcProducts(filter: {categories: {elemMatch: {name: {eq: "Shop"}}}}) {
				edges {
					node {
						id
						wordpress_id
						sale_price
						price
						name
						images {
						  src
						}
						slug
					}
				}
			}
		}
	`)
	const ProductTemplate = path.resolve(`./src/templates/product_details.js`);
	const ProductList = path.resolve(`./src/templates/product.js`);
	
	products.data.allWcProducts.edges.forEach((edge,index) => {
		  createPage({
		  path: `/product/${edge.node.slug}/`,
		  component: slash(ProductTemplate),
		  context: {
			id: edge.node.id
		  },
		})			  
	})
	
	
	const productsdata = products.data.allWcProducts.edges;
	paginate({
		createPage,
		items: productsdata,
		itemsPerPage: 10,
		pathPrefix: '/product',
		component: ProductList,
	});
	
	/* CATEGORY */
	const Category = await graphql(`
		{
			allWordpressCategory {
				edges {
					node {
						id
						name
						slug
					}
				}
			}
		}
	`)
	const CatTemplate = path.resolve(`./src/templates/category.js`);
	Category.data.allWordpressCategory.edges.forEach((edge,index) => {
		  createPage({
		  path: `/category/${edge.node.slug}/`,
		  component: slash(CatTemplate),
		  context: {
			id: edge.node.id
		  },
		})			  
	})
	
	/* TAGS */
	const tags = await graphql(`
		{
			allWordpressTag {
				edges {
					node {
						id
						name
						slug
					}
				}
			}
		}
	`)
	const TagsTemplate = path.resolve(`./src/templates/tags.js`);
	tags.data.allWordpressTag.edges.forEach((edge,index) => {
		  createPage({
		  path: `/tags/${edge.node.slug}/`,
		  component: slash(TagsTemplate),
		  context: {
			id: edge.node.id
		  },
		})			  
	})
	
	/* CAMPS */
	const Camps = await graphql(`
		{
			allWordpressWpCpt151986 {
				edges {
					node {
						id
						title
						content
						acf {
						  product_category
						}
						slug
					}
				}
			}
		}
	`)
	const CampsTemplate = path.resolve(`./src/templates/camps_details.js`);
	Camps.data.allWordpressWpCpt151986.edges.forEach((edge,index) => {
		  createPage({
		  path: `/camps/${edge.node.slug}/`,
		  component: slash(CampsTemplate),
		  context: {
			id: edge.node.id
		  },
		})			  
	})
	
	
	/* CITY */
	const City = await graphql(`
		{
			allWordpressWpCpt152600 {
				edges {
					node {
						id
						title
						slug
					}
				}
			}
		}
	`)
	const CityTemplate = path.resolve(`./src/templates/city_details.js`);
	City.data.allWordpressWpCpt152600.edges.forEach((edge,index) => {
		  createPage({
		  path: `/city/${edge.node.slug}/`,
		  component: slash(CityTemplate),
		  context: {
			id: edge.node.id
		  },
		})			  
	})
	
	
	/* HOME PAGE */
	let Data = await getData();
	let HomeData = Data.data;
	const HomeComponent = require.resolve('./src/templates/home.js');
	createPage({
		path: '/',
		component: HomeComponent,
		context: {
			HomeData: HomeData,
		}
	});
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
