import React, {Component} from 'react';
import Layout from "../components/layout"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"
import {Container,Breadcrumb} from 'react-bootstrap'
import {Row,Col,Card,Image} from 'react-bootstrap'
import { Link } from 'gatsby'

import PropTypes from "prop-types"
import { Disqus } from 'gatsby-plugin-disqus'
class BlogDetails extends Component {
  render() {
  
	const blog = this.props.data.allWordpressWpCpt150963
	const id = this.props.data.allWordpressWpCpt150963.edges[0].node.wordpress_id
	const title = this.props.data.allWordpressWpCpt150963.edges[0].node.title
	let disqusConfig = {
		url: "",
		identifier: id,
		title: title,
	}
      return (
          <Layout>
            <>
				<section className="Banner-Section">
					<Container>
						<div className="Banner-Section-data">
							<Breadcrumb>
								<Breadcrumb.Item className="">
									<Link className="nav-link p-0" to="/">Home</Link>
								</Breadcrumb.Item>
								<Breadcrumb.Item className="">
									<Link className="nav-link p-0" to="/flyer">Flyer</Link>
								</Breadcrumb.Item>
								<Breadcrumb.Item active href="" dangerouslySetInnerHTML={{ __html: blog.edges[0].node.title}} className="" />
							</Breadcrumb>
							<h2 className="heading-banner">Flyer</h2>
						</div>
					</Container>
				</section>
				<section className="Blog-details-Section-2">
					<Container>
						<div className="Blog-details-Section-2-data">
							<Row>
								<Col xl={8} lg={8} md={12} className="lg-mb-2">
									<Card className="blog-details-card mb-30">
										<Card.Title as="h5" dangerouslySetInnerHTML={{ __html: blog.edges[0].node.title}} />
										<span> by {blog.edges[0].node.author.name} / { blog.edges[0].node.date}</span>
										<div className="card-img mb-3">
											<Image src={ blog.edges[0].node.acf.featured_image} fluid />
										</div>
										<Card.Text as="div" dangerouslySetInnerHTML={{ __html: blog.edges[0].node.content}} />
									</Card>
								</Col>
							</Row>
						</div>
						<div className="clearfix nav-controls border rounded mb-4">
                            {(blog.edges[0].previous != null) ? (<Link to={"guide/"+blog.edges[0].previous.slug+"/"} className="nav-control-left float-left  rounded p-1">
                               <span className="label-text  d-block">Previous Post</span>
                               <span className="section-heading-3  mb-0">{blog.edges[0].previous.title}</span>
                            </Link>) : ('')}
							
							{(blog.edges[0].next != null) ? (<Link to={"guide/"+blog.edges[0].next.slug+"/"} className="nav-control-left float-right text-right  rounded p-1">
                               <span className="label-text  d-block">Next Post</span>
                               <span className="section-heading-3  mb-0">{blog.edges[0].next.title}</span>
                            </Link>) : ('')}
							
                        </div>
							<Disqus config={disqusConfig} />
	  
					</Container>
				</section>

				
				
      
              <BottomForm/>
              <Footer/>
            </>
          </Layout>
      )
  }
}

BlogDetails.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default BlogDetails

export const pageQuery = graphql`
  query($id: String!) {
    allWordpressWpCpt150963(filter: {id: { eq: $id }}) {
		edges {
			next {
				slug
				title
			}	
			previous {
				slug
				title
			}
			node {
				id
				acf {
					featured_image
				}
				author {
					name
				}
				date(formatString: "D MMMM, Y")
				title
				content
				wordpress_id
				slug
			}
		}
    }
	
	
  }
  
`
