import React, { Component  } from 'react';
import {Container,Row,Col,Card,Image} from 'react-bootstrap'
import { Link } from 'gatsby'
import card1 from '../../images/resource-all-video-card.png'
import cardguide from '../../images/resource-video-card-2.png'

class ResourceAll extends Component {
    render() {      
        return (
            <>
            <section className="Resource-all">
                <Container>
                    <div className="Resource-all-data">

                        {/* videos */}
                        <Row className="">
                            <Col xl={12} className="mb-30 resource-card-col">
                                <Card className="resource-card mb-0 video">
                                    <div className="card-img">
                                        <Image src={card1} fluid alt="" className="" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title as="h5" className="mb-0">Australian Sports Camps Soccer Home Training</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        {/* guides */}
                        <Row className="">
                            <Col xl={4} lg={4} md={6} className="mb-30 resource-card-col">
                                <Card className="resource-card mb-0 all">
                                    <div className="card-img">
                                        <Image src={cardguide} fluid alt="" className="" />
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
                                        <Image src={cardguide} fluid alt="" className="" />
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
                                        <Image src={cardguide} fluid alt="" className="" />
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

                        

                        {/* flyers */}
                        <Row className="">
                            <Col xl={6} lg={6} md={6} className="mb-30 resource-card-col">
                                <Card className="resource-card mb-0 all">
                                    <div className="card-img">
                                        <Image src={cardguide} fluid alt="" className="" />
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
                            <Col xl={6} lg={6} md={6} className="mb-30 resource-card-col">
                                <Card className="resource-card mb-0 all">
                                    <div className="card-img">
                                        <Image src={cardguide} fluid alt="" className="" />
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
                    </div>
                </Container>
            </section>
            </>
        );
    }
}

export default ResourceAll;