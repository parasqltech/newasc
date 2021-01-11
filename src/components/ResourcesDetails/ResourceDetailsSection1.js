import React, { Component  } from 'react';
import {Container,Row,Col,Image,Form,Button} from 'react-bootstrap'
import card1 from '../../images/resource-details-card.png'
import add from '../../images/resource-details-add.png'

class ResourceDetailsSection1 extends Component {
 
    render() {      
        return (
            <>
            <section className="Resource-details-section-1">
                <Container>
                    <div className="Resource-details-section-1-data">
                        <Row>
                            <Col xl={8} lg={8} className="lg-mb-4">
                                <div className="">
                                    <div className="title">
                                        <h2 className="text-left mb-0">Cricket drills that parents and kids can practice together</h2>
                                    </div>
                                    <Image src={card1} fluid className="mb-30" alt="" />
                                    <p className="font-16 font-medium align-justify">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                    <p className="font-16 font-medium align-justify">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</p>
                                </div>
                            </Col>
                            <Col xl={4} lg={4}>
                                <div className="gray-data mb-30">
                                    <div className="title">
                                        <h2 className="text-center mb-0">Download Now</h2>
                                    </div>
                                    <Form>
                                        <Row>
                                            <Col xl={12} className="mb-0">
                                                <Form.Group controlId="" className="mb-20">
                                                    <Form.Label className="master-label">First Name</Form.Label>
                                                    <Form.Control className="mb-1 master" id="" placeholder="First Name" />
                                                </Form.Group>
                                            </Col>
                                            <Col xl={12} className="mb-0">
                                                <Form.Group controlId="" className="mb-20">
                                                    <Form.Label className="master-label">Last Name</Form.Label>
                                                    <Form.Control className="mb-1 master" id="" placeholder="Last Name" />
                                                </Form.Group>
                                            </Col>
                                            <Col xl={12} className="mb-0">
                                                <Form.Group controlId="" className="mb-20">
                                                    <Form.Label className="master-label">Email ID</Form.Label>
                                                    <Form.Control type="email" className="mb-1 master" id="" placeholder="Enter your email" />
                                                </Form.Group>
                                            </Col>
                                            <Col xl={12} className="mb-0">
                                                <Form.Group controlId="" className="mb-20">
                                                    <Form.Label className="master-label">Mobile</Form.Label>
                                                    <Form.Control className="mb-1 master" id="" placeholder="04xxxxxxxx" />
                                                </Form.Group>
                                            </Col>
                                            <Col xl={12} className="mb-20 text-center">
                                                <Button className=" uppercase btn-sm btn-orange" to="">Send My PDF!</Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                                {/* Addvertises Start */}
                                <div className="text-center">
                                    <Image src={add} fluid className="mb-0" alt="" />
                                </div>
                                {/* Addvertises End */}
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            </>
        );
    }
}

export default ResourceDetailsSection1;