import React, {Component} from 'react';
import Layout from "../components/layout"
import Footer from "../components/common/Footer"
import {Container,Breadcrumb, Row,Col} from 'react-bootstrap'
import BottomForm from "../components/common/BottomForm"
import Campbooking from "../components/Camps/Campbooking"
import { graphql,Link } from "gatsby"
import PropTypes from "prop-types"


class Camps extends Component {
	render() {
		const page = this.props.data.allWordpressWpCpt151986;
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
								<Link className="nav-link p-0" to="/Sport">Sport</Link>
							</Breadcrumb.Item>
							<Breadcrumb.Item active href=""className="">{page.edges[0].node.title}</Breadcrumb.Item>
						</Breadcrumb>
						<h2 className="heading-banner">{page.edges[0].node.title}</h2>
						</div>
					</Container>
				</section>	
                <section className="Sport-details-section-2">
					<Container>
						<Row className="mb-30">
							<Col xl={12}>
									<div className="font-15 font-medium color-3b mb-0" dangerouslySetInnerHTML={{ __html: page.edges[0].node.content}}  />
							</Col>
						</Row>
					
					</Container>
				</section>
				<section className="Sport-details-section-3">
					<Container>
						<Row className="justify-content-center mb-4">
							<Col xl={12} lg={12}>
								<div className="title">
									<h2>Select your camp below to book online now.</h2>
								</div>
							</Col>
						</Row>
						<Row className="">
							<Campbooking category={page.edges[0].node.acf.product_category} />
						</Row>
                    </Container>
                </section>
			
				<BottomForm/>
				<Footer/>
				</>
			</Layout>
      )
  }
}

Camps.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Camps


export const pageQuery = graphql`
  query($id: String!) {
    allWordpressWpCpt151986(filter: {id: { eq: $id }}) {
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
				title
				content
				wordpress_id
				slug
				acf {
						  product_category
						}
				author {
					name
				}
				date(formatString: "D MMMM, Y")
			}
		}
    }
	
	
  }
  
`

