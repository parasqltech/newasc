import React, { Component  } from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap'
import { Link } from 'gatsby'
import icon1 from '../../images/contact-card-1.png'
import icon2 from '../../images/contact-card-2.png'
import icon3 from '../../images/contact-card-3.png'

class ContactusSection2 extends Component {
 
    render() {      
        return (
            <>
            <section className="Contactus-Section-2">
                <Container>
                    <div className="Contactus-Section-2-data">
                        <div className="title">
                            <p className="font-bold text-left mb-3">If you’d like to get in touch with ASC, please fill in this form. We’ll get back to you as soon as we can!</p>
                        </div>
                        <div className="title">
                            <h2 className="mb-3">Australian Sports Camps Pty Ltd</h2>
                        </div>
                        <Row>
                            <Col xl={4} lg={4} md={12} className="lg-mb-4">
                                <div className="steps-data justify-content-center d-block text-center">
                                    <Image src={icon1} fluid alt="" className="" />
                                    <span className="font-regular mb-1">ABN: 34 156 517 412</span>
                                    <a href="tel:1300914368" className="font-bold mb-0">Freecall: 1300 914 368</a>
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={12} className="lg-mb-4">
                                <div className="steps-data justify-content-center d-block text-center">
                                    <Image src={icon2} fluid alt="" className=""/>
                                    <span className="font-regular mb-1">Post:</span>
                                    <a href="#" className="font-bold mb-0">PO Box 5332, Clayton VIC 3168</a>
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={12}>
                                <div className="steps-data justify-content-center d-block text-center">
                                    <Image src={icon3} fluid alt="" className=""/>
                                    <span className="font-regular mb-1">Email: </span>
                                    <a href="mailto:admin@australiansportscamps.com.au" className="font-bold mb-0">admin@australiansportscamps.com.au</a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            </>
        );
    }
}

export default ContactusSection2;