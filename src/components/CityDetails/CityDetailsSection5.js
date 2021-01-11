import React, { Component  } from 'react';
import {  Container,Col,Button,Form,Row } from 'react-bootstrap'

class CityDetailsSection5 extends Component {
   
    render() {   
        return (
            <>
            <section className="City-details-section-5" id="flyer_form">
                <Container>
                    <div className="title">
                        <h2>FLYER DOWNLOAD REQUEST</h2>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor </p>
                    </div>
                    
                    <Form>
                        <Row className="align-items-center justify-content-center">
                            <Col xl={6} lg={6} md={6} className="mb-0">
                            <Form.Group controlId="" className="mb-30">
                                    <Form.Control
                                            className="mb-1 master"
                                            id=""
                                            placeholder="First Name"
                                        />
                                </Form.Group>
                            </Col>
                            <Col xl={6} lg={6} md={6} className="mb-0">
                                <Form.Group controlId="" className="mb-30">
                                    <Form.Control
                                            className="mb-1 master"
                                            id=""
                                            placeholder="Last Name"
                                        />
                                </Form.Group>
                            </Col>
                            <Col xl={12} className="mb-0">
                                <Form.Group controlId="" className="mb-30">
                                    <Form.Control
                                            className="mb-1 master"
                                            id=""
                                            placeholder="Enter your email"
                                        />
                                </Form.Group>
                            </Col>
                            <Col xl={12} className="mb-0">
                                <Form.Group controlId="" className="mb-30">
                                    <Form.Control
                                            className="mb-1 master"
                                            id=""
                                            placeholder="Mobile (Optional) - Ex. 04xxxxxxxx"
                                        />
                                </Form.Group>
                            </Col>
                            <Col xl={12} className="mb-0">
                                <Form.Group controlId="" className="mb-0">
                                    {['checkbox'].map((type) => (
                                        <div key={`custom-${type}`} className="mb-3">
                                        <Form.Check 
                                            custom
                                            type={type}
                                            id={`Subscribe1`}
                                            label={`Subscribe to Updates`}
                                        />
                                        </div>
                                    ))}
                                </Form.Group>
                            </Col>
                            <Col xl={12} className="mb-0 text-center">
                                <Button className="btn-orange-large-border">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </section>
            </>
        );
    }
}

export default CityDetailsSection5;