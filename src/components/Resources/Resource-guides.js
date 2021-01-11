import React, { Component  } from 'react';
import {Container,Row,Col,Card,Image,Pagination} from 'react-bootstrap'
import { Link } from 'gatsby'
import card1 from '../../images/resource-guide-card-1.png'
import card2 from '../../images/resource-guide-card-2.png'
import card3 from '../../images/resource-guide-card-3.png'

class ResourceGuides extends Component {
    render() {      
        return (
            <>
            <section className="Resource-guides">
                <Container>
                    <div className="Resource-guides-data">
                        <Row className="">
                            <Col xl={4} lg={4} md={6} className="mb-30 resource-card-col">
                                <Card className="resource-card mb-0 all">
                                    <div className="card-img">
                                        <Image src={card1} fluid alt="" className="" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title as="h5">Cricket drills that parents and kids can practice together</Card.Title>
                                        <Card.Text as="p" className="line-break-3">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor inviduntant and complete
                                        </Card.Text>
                                        <Link className="nav-link p-0 d-flex align-items-center" to="/Resourcesdetails">Read more 
                                            <i className="fa fa-chevron-right ml-2"></i> 
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={4} lg={4} md={6} className="mb-30 resource-card-col">
                                <Card className="resource-card mb-0 all">
                                    <div className="card-img">
                                        <Image src={card2} fluid alt="" className="" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title as="h5">Cricket drills that parents and kids can practice together</Card.Title>
                                        <Card.Text as="p" className="line-break-3">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor inviduntant and complete
                                        </Card.Text>
                                        <Link className="nav-link p-0 d-flex align-items-center" to="/Resourcesdetails">Read more 
                                            <i className="fa fa-chevron-right ml-2"></i> 
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={4} lg={4} md={6} className="mb-30 resource-card-col">
                                <Card className="resource-card mb-0 all">
                                    <div className="card-img">
                                        <Image src={card3} fluid alt="" className="" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title as="h5">Cricket drills that parents and kids can practice together</Card.Title>
                                        <Card.Text as="p" className="line-break-3">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor inviduntant and complete
                                        </Card.Text>
                                        <Link className="nav-link p-0 d-flex align-items-center" to="/Resourcesdetails">Read more 
                                            <i className="fa fa-chevron-right ml-2"></i> 
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={4} lg={4} md={6} className="mb-30 resource-card-col">
                                <Card className="resource-card mb-0 all">
                                    <div className="card-img">
                                        <Image src={card1} fluid alt="" className="" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title as="h5">Cricket drills that parents and kids can practice together</Card.Title>
                                        <Card.Text as="p" className="line-break-3">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor inviduntant and complete
                                        </Card.Text>
                                        <Link className="nav-link p-0 d-flex align-items-center" to="/Resourcesdetails">Read more 
                                            <i className="fa fa-chevron-right ml-2"></i> 
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={4} lg={4} md={6} className="mb-30 resource-card-col">
                                <Card className="resource-card mb-0 all">
                                    <div className="card-img">
                                        <Image src={card2} fluid alt="" className="" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title as="h5">Cricket drills that parents and kids can practice together</Card.Title>
                                        <Card.Text as="p" className="line-break-3">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor inviduntant and complete
                                        </Card.Text>
                                        <Link className="nav-link p-0 d-flex align-items-center" to="/Resourcesdetails">Read more 
                                            <i className="fa fa-chevron-right ml-2"></i> 
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={4} lg={4} md={6} className="mb-30 resource-card-col">
                                <Card className="resource-card mb-0 all">
                                    <div className="card-img">
                                        <Image src={card3} fluid alt="" className="" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title as="h5">Cricket drills that parents and kids can practice together</Card.Title>
                                        <Card.Text as="p" className="line-break-3">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor inviduntant and complete
                                        </Card.Text>
                                        <Link className="nav-link p-0 d-flex align-items-center" to="/Resourcesdetails">Read more 
                                            <i className="fa fa-chevron-right ml-2"></i> 
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        
                        <div className="justify-content-center d-flex">
                            <Pagination className="justify-content-center">
                                <Pagination.Prev className="prev" />
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Item active>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Item>{4}</Pagination.Item>
                                <Pagination.Item>{5}</Pagination.Item>
                                <Pagination.Ellipsis />
                                <Pagination.Item>{10}</Pagination.Item>
                                <Pagination.Next className="next"/>
                            </Pagination>
                        </div>
                    </div>
                </Container>
            </section>
            </>
        );
    }
}

export default ResourceGuides;