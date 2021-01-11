import React, {Component} from 'react';
import { graphql,Link } from "gatsby"
import PropTypes from "prop-types"
import {Container,Breadcrumb} from 'react-bootstrap'
import {Image,ListGroup,Form,InputGroup,FormControl,Button} from 'react-bootstrap'
import {Row,Col,Card} from 'react-bootstrap'
import Layout from "../components/layout"
import Footer from "../components/common/Footer"
import BottomForm from "../components/common/BottomForm"
import imgbox1 from '../images/blog-imgbox-1.png'
import imgbox2 from '../images/blog-imgbox-2.png'
import imgbox3 from '../images/blog-imgbox-3.png'
import imgbox4 from '../images/blog-imgbox-4.png'
import sidebaradd1 from '../images/sidebar-add-1.png'
import sidebaradd2 from '../images/sidebar-add-2.png'
import { FaSearch } from "react-icons/fa";
class demopage extends Component {
  render() {
    const blog = this.props.data.allWordpressWpCpt150461
   	const category = this.props.data.allWordpressCategory
   
   
    return (
		<Layout>
			<section className="Banner-Section">
                <Container>
                    <div className="Banner-Section-data">
                    <Breadcrumb>
                        <Breadcrumb.Item className="">
                            <Link className="nav-link p-0" to="/">Home</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active href=""className="">Guide</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2 className="heading-banner">Guide</h2>
                    </div>
                </Container>
            </section> 
			<section className="Blog-Section-2">
                <Container>
                    <div className="Blog-Section-2-data">
                        <Row>
                            <Col xl={8} lg={8} md={12} className="lg-mb-2">
                                
								{blog && blog.edges.map( prop => {
									return (
										<Card className="blog-card mb-30">
											<div className="card-img">
												<Image src={prop.node.acf.featured_image} fluid />
											</div>
											<Card.Body>
												<Card.Title dangerouslySetInnerHTML={{ __html: prop.node.title}} as="h5" />
												<span> by {prop.node.author.name} / {prop.node.date}</span>
												<Card.Text as="div" dangerouslySetInnerHTML={{ __html: prop.node.content.substring(0, 500)+"...."}} />
												<Link className="btn btn-orange-border uppercase" to={"/guide/"+prop.node.slug}>Read More</Link>
											</Card.Body>
										</Card>						
									)
								})}
								
								{(this.props.pageContext.previousPagePath !== "") ? (<Link className="btn btn-primary"  to={this.props.pageContext.previousPagePath}>Previous</Link>) : (<Link className="btn btn-primary invisible"  to={this.props.pageContext.previousPagePath}>Previous</Link>)}
			
			
								{(this.props.pageContext.nextPagePath !== "") ? (<Link className="btn btn-primary" to={this.props.pageContext.nextPagePath}>Next</Link>) : (<Link className="btn btn-primary invisible" to={this.props.pageContext.nextPagePath}>Next</Link>)}
								
								
							</Col>
							<Col xl={4} lg={4} md={12}>
                                <div className="side-sticky">
                                    <Form>
										{/*  */}
										<div className="mb-4 search">
											<h3 className="font-20 mb-2 font-medium">Search</h3> 
											<Form>
												<Form.Group controlId="" className="mb-0">
													<InputGroup className="mb-3">
														<FormControl className="master border-right-0"
														placeholder="Search in Guide" />
														<InputGroup.Append className="border-left-0">
															<InputGroup.Text id="basic-addon2">
																<Button className="btn-orange btn"><FaSearch/></Button>
															</InputGroup.Text>
														</InputGroup.Append>
													</InputGroup>
												</Form.Group>
											</Form>
										</div>
										{/*  */}
										
										<div className="inner-sidebar mb-4">
												<h3 className="font-20 mb-2 font-medium">Categories</h3>
													<ListGroup as="ul" className="categaries">
														
														{category && category.edges.map( (propd,i) => {
															return (
																
																(propd.node.name !== 'Uncategorised') ? (<ListGroup.Item key={i} as="li" className="font-18 justify-content-between d-flex align-items-center">
																	<Link to={"/category/"+propd.node.slug+"/"} className="mr-1 color-70 font-regular decoration-none">{propd.node.name}</Link> <p className="mb-0 color-70 font-regular">{propd.node.count}</p>
																</ListGroup.Item>) : ("") 
															)
														})}
													</ListGroup>
										</div>
										{/*  */}
										<div className="inner-media-sidebar mb-4">
											<h3 className="font-20 mb-2 font-medium">Popular Posts</h3>
											<ListGroup as="ul">
												<ListGroup.Item as="li" className="d-flex">
														<div className="img-box-sidebar">
														<Image src={imgbox1} className="img-fluid border-0"/>
														</div>
														<div className="content-box-sidebar ">
															<span className="font-14 font-medium uppercase">August 14, 2019</span>
															<h2 className="font-14 font-bold title-color mb-1 line-break-2">10 USEFUL TIPS FROM EXPERIENCED CRICKET PLAYERS & COACHESs</h2>
														</div>
												</ListGroup.Item> 
												<ListGroup.Item as="li" className="d-flex">
														<div className="img-box-sidebar">
														<Image src={imgbox2} className="img-fluid border-0"/>
														</div>
														<div className="content-box-sidebar ">
															<span className="font-14 font-medium uppercase">August 6, 2019</span>
															<h2 className="font-14 font-bold title-color mb-1 line-break-2">HOW HAVE TECHNOLOGICAL CHANGES AFFECTED JUNIOR NETBALL?</h2>
														</div>
												</ListGroup.Item> 
												<ListGroup.Item as="li" className="d-flex">
														<div className="img-box-sidebar">
														<Image src={imgbox3} className="img-fluid border-0"/>
														</div>
														<div className="content-box-sidebar ">
															<span className="font-14 font-medium uppercase">February 27, 2019</span>
															<h2 className="font-14 font-bold title-color mb-1 line-break-2">BULLYING IN YOUTH SPORTS</h2>
														</div>
												</ListGroup.Item> 
												<ListGroup.Item as="li" className="d-flex">
														<div className="img-box-sidebar">
														<Image src={imgbox4} className="img-fluid border-0"/>
														</div>
														<div className="content-box-sidebar ">
															<span className="font-14 font-medium uppercase">February 27, 2019</span>
															<h2 className="font-14 font-bold title-color mb-1 line-break-2">PARENT SIDELINE BEHAVIOUR</h2>
														</div>
												</ListGroup.Item> 
											</ListGroup>
										</div>
										{/*  */}
										<div className="mb-4 text-center">
											<Link to="">
												<Image src={sidebaradd1} fluid />
											</Link>
										</div>
										{/*  */}
										<div className="inner-sidebar mb-4">
											<h3 className="font-20 mb-2 font-medium">Browse Tags</h3>
											<Form.Group className="mb-0 font-16 font-regular tagsList">
												<Form.Check
													inline
													type="checkbox"
													id="tags1"
													label="sports"
												/>
												<Form.Check
													inline
													type="checkbox"
													id="tags2"
													label="sportsnews"
												/>
												<Form.Check
													inline
													type="checkbox"
													id="tags3"
													label="football"
												/>
												<Form.Check
													inline
													type="checkbox"
													id="tags4"
													label="basketball"
												/>
												<Form.Check
													inline
													type="checkbox"
													id="tags5"
													label="sportslover"
												/>
												<Form.Check
													inline
													type="checkbox"
													id="tags6"
													label="soccer"
												/>
												<Form.Check
													inline
													type="checkbox"
													id="tags7"
													label="tennis"
												/>
												<Form.Check
													inline
													type="checkbox"
													id="tags8"
													label="cricket "
												/>
											</Form.Group>
										</div>
										{/*  */}
										<div className="mb-4">
											<h3 className="font-20 mb-2 font-medium">About Blog</h3>
											<p className="font-16 font-medium color-70">Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, pulvinar nunc sapien ornare nisl.</p>
										</div>
										{/*  */}
										<div className="mb-4 text-center">
											<Link to="">
												<Image src={sidebaradd2} fluid />
											</Link>
										</div>
										{/*  */}
									</Form>
                                </div>
                            </Col>			
						</Row>
					</div>	
				</Container>
			</section>
			<BottomForm/>
			<Footer/>
			 
		 
		</Layout>
	)
	}}

demopage.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default demopage


export const pageQuery = graphql`
	query($skip: Int!, $limit: Int!) {
		allWordpressWpCpt150461(skip: $skip, limit: $limit) {
		edges {
			node {
				id
				acf {
					featured_image
				}
				author {
					name
				}
				slug
				title
				date(formatString: "D MMMM, Y")
				content
			}
		}
	}
	allWordpressCategory {
		edges {
			node {
				id
				name
				slug
				count
			}
		}
	}
  }
  
`

