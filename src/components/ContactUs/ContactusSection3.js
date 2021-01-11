import React, { Component  } from 'react';
import {Container,Form,Row,Col,Button} from 'react-bootstrap'
import { Link } from 'gatsby'

class ContactusSection3 extends Component {
 
    render() {      
        return (
            <>
            <section className="Contactus-Section-3">
                <Container>
                    <div className="Contactus-Section-3-data">
                        <div className="title">
                            <h2 className="mb-3">Don't Be Shy, Say Hello To Us!</h2>
                        </div>
                        <Form>
                            <Row>
                                <Col xl={6} lg={6} className="mb-0">
                                    <Form.Group controlId="" className="mb-30">
                                        <Form.Label className="master-label">First Name*</Form.Label>
                                        <Form.Control className="mb-1 master" id="" placeholder="Enter First name" />
                                    </Form.Group>
                                </Col>
                                <Col xl={6} lg={6} className="mb-0">
                                    <Form.Group controlId="" className="mb-30">
                                        <Form.Label className="master-label">Last Name*</Form.Label>
                                        <Form.Control className="mb-1 master" id="" placeholder="Enter Last name" />
                                    </Form.Group>
                                </Col>
                                <Col xl={12} className="mb-0">
                                    <Form.Group controlId="" className="mb-30">
                                        <Form.Label className="master-label">Email*</Form.Label>
                                        <Form.Control className="mb-1 master" id="" placeholder="Enter Email id" />
                                    </Form.Group>
                                </Col>
                                <Col xl={6} lg={6} className="mb-0">
                                    <Form.Group controlId="" className="mb-30">
                                        <Form.Label className="master-label">Phone</Form.Label>
                                        <Form.Control className="mb-1 master" id="" placeholder="" />
                                    </Form.Group>
                                </Col>
                                <Col xl={6} lg={6} className="mb-0">
                                    <Form.Group controlId="" className="mb-30">
                                        <Form.Label className="master-label">State*</Form.Label>
                                            <Form.Control as="select" className="mb-1 master">
                                                <option>Select an option</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col xl={8} lg={10} md={12} className="mb-0">
                                    <Form.Group controlId="" className="mb-20">
                                        <Form.Label className="master-label">Sport</Form.Label>
                                        {['checkbox'].map((type) => (
                                            <div key={`custom-${type}`} className="mb-0">
                                            <Form.Check className="blue-check" custom type={type} id={`custom-${type}-1`} inline
                                                label={`Basketball`}
                                            />
                                            <Form.Check className="blue-check" custom type={type} id={`custom-${type}-2`} inline
                                                label={`Netball`}
                                            />
                                            <Form.Check className="blue-check" custom type={type} id={`custom-${type}-3`} inline
                                                label={`Cricket`}
                                            />
                                            <Form.Check className="blue-check" custom type={type} id={`custom-${type}-4`} inline
                                                label={`Soccer`}
                                            />
                                            <Form.Check className="blue-check" custom type={type} id={`custom-${type}-5`} inline
                                                label={`Football`}
                                            />
                                            <Form.Check className="blue-check" custom type={type} id={`custom-${type}-6`} inline
                                                label={`Hockey`}
                                            />
                                            <Form.Check className="blue-check" custom type={type} id={`custom-${type}-7`} inline
                                                label={`Tennis`}
                                            />
                                            <Form.Check className="blue-check" custom type={type} id={`custom-${type}-8`} inline
                                                label={`Rugby League`}
                                            />
                                            <Form.Check className="blue-check" custom type={type} id={`custom-${type}-9`} inline
                                                label={`Rugby Union`}
                                            />
                                            <Form.Check className="blue-check" custom type={type} id={`custom-${type}-10`} inline
                                                label={`Other`}
                                            />
                                            </div>
                                        ))}
                                    </Form.Group>
                                </Col>
                                <Col xl={12} lg={12} className="mb-0">
                                    <Form.Group controlId="" className="mb-30">
                                        <Form.Label className="master-label">Message*</Form.Label>
                                        <Form.Control className="mb-1 text-area master" as="textarea" rows="8" />
                                    </Form.Group>
                                </Col>
                                <Col xl={12} lg={12} className="mb-0 text-center">
                                    <Button className=" uppercase btn-sm btn-orange" to="">Send Message</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Container>
            </section>
            </>
        );
    }
}

export default ContactusSection3;