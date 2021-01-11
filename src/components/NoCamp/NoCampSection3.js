import React, { Component  } from 'react';
import {Container,Row,Col,Form,Image,Button} from 'react-bootstrap'
import { Link } from 'gatsby'
import addimage from '../../images/add-image.png'

class NoCampSection3 extends Component {
 
    render() {      
        return (
            <>
            <section className="No-camp-section-3">
                <Container>
                    <Row>
                        <Col xl={8} lg={8} md={7} className="md-mb-4">
                            <Form className="notify-form">
                                <Form.Group controlId="" className="mb-30">
                                    <Form.Label className="master-label">Email</Form.Label>
                                    <Form.Control className="mb-1 master" id="" placeholder="Enter your email" />
                                </Form.Group>
                                
                                <Form.Group controlId="" className="">
                                    <Form.Label className="master-label">Remarks (optional)</Form.Label>
                                    <Form.Control as="textarea" className="text-area master" placeholder="Your message" rows="10" />
                                </Form.Group>
                                <Form.Group controlId="" className="text-center">
                                    <Button type="button" className="uppercase btn-sm btn-orange mb-0">
                                        Notify me
                                    </Button> 
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col xl={4} lg={4} md={5}>
                            <div className="add-image">
                                <Image src={addimage} fluid/>
                            </div>
                            <p className="font-16 font-medium mt-2">Want to save up to <span className="font-bold">$141.75?</span> Checkout<br></br> our <Link to="/" className="decoration-yes">Membership Passes</Link></p>
                            
                            <div className="call-div">
                                <a className="nav-link p-0 font-22 font-bold text-white uppercase text-center" href="tel:1300914368">CALL on 
                                <br></br>1300 914 368</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            </>
        );
    }
}

export default NoCampSection3;