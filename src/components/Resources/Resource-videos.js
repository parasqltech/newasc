import React, { Component  } from 'react';
import {Container,Row,Col,Card,Image} from 'react-bootstrap'
import card1 from '../../images/resource-video-card-1.png'
import card2 from '../../images/resource-video-card-2.png'
import card3 from '../../images/resource-video-card-3.png'

class ResourceVideos extends Component {
    render() {      
        return (
            <>
            <section className="Resource-videos">
                <Container>
                    <div className="Resource-videos-data">
                        <Row className="">
                            <Col xl={6} lg={6} className="mb-30 resource-card-col">
                                <Card className="resource-card mb-0 video">
                                    <div className="card-img">
                                        <Image src={card1} fluid alt="" className="" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title as="h5" className="mb-0">Australian Sports Camps Soccer Home Training</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={6} lg={6} className="mb-30 resource-card-col">
                                <Card className="resource-card mb-0 video">
                                    <div className="card-img">
                                        <Image src={card2} fluid alt="" className="" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title as="h5" className="mb-0">Australian Sports Camps Basketball Home Training</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={6} lg={6} className="resource-card-col">
                                <Card className="resource-card mb-0 video">
                                    <div className="card-img">
                                        <Image src={card3} fluid alt="" className="" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title as="h5" className="mb-0">Australian Sports Camps AFL Home Training</Card.Title>
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

export default ResourceVideos;