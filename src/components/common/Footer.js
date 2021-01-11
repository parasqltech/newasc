import React, { Component  } from 'react';
import {  Container,Image,ListGroup,Row,Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import logo from '../../images/footer-logo.png'
import footer1 from '../../images/footer-1.png'
import footer2 from '../../images/footer-2.png'
import footer3 from '../../images/footer-3.png'
import footer4 from '../../images/footer-4.png'
import footer5 from '../../images/footer-5.png'
import footer6 from '../../images/footer-6.png'

import F1Menu from './F1Menu'
import F2Menu from './F2Menu'

class Footer extends Component {
    render() {
        
        return (
            <>
            <footer>
                <Container>
                    <Row>
                        <Col xl={4} lg={12} className="xl-mb-4">
                            <div className="footer-data">
                                <h2 className="font-22 font-bold text-white uppercase mb-3">About ASC</h2>
                                <p className="font-16 font-regular text-white">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>
                                
                                <p className="d-flex align-items-center change-font">
                                    <a className="nav-link p-0 text-white font-16 font-regular pr-2" href="tel:1300914368"><i className="fa fa-phone font-16"></i></a><a className="nav-link p-0 text-white font-16 font-regular" href="tel:1300914368"> CALL US: 1300 914 368</a>
                                </p>
                                
                                <p className="d-flex align-items-center change-font">
                                    <a className="nav-link p-0 text-white font-16 font-regular pr-2" href="mailto:admin@australiansportscamps.com.au"><i className="fa fa-envelope font-16"></i></a><a className="nav-link p-0 text-white font-16 font-regular" href="mailto:admin@australiansportscamps.com.au"> admin@australiansportscamps.com.au</a>
                                </p>
                        
                            </div>
                        </Col>
                        <Col xl={2} lg={4} md={6} className="lg-mb-4">
                            <div className="footer-data">
                                <h2 className="font-22 font-bold text-white mb-3">Lorem ipsum</h2>
                                <ListGroup as="ul">
                                    <F1Menu />
                                </ListGroup>
                            </div>
                        </Col>
                        <Col xl={3} lg={4} md={6} className="lg-mb-4">
                            <div className="footer-data">
                                <h2 className="font-22 font-bold text-white mb-3">Lorem ipsum</h2>
                                <ListGroup as="ul">
                                    <F2Menu />
                                </ListGroup>
                            </div>
                        </Col>
                        <Col xl={3} lg={4} md={12}>
                            <div className="footer-data-last">
                                <h2 className="font-22 font-bold text-white mb-3">FOLLOWUS ON SOCIAL MEDIA</h2>
                                <ListGroup as="ul" horizontal className="first">
                                    <ListGroup.Item as="li">
                                        <Image src={footer1} className="img-fluid" alt="icons1"/>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        <Image src={footer2} className="img-fluid" alt="icons1"/>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        <Image src={footer3} className="img-fluid" alt="icons1"/>
                                    </ListGroup.Item>
                                </ListGroup>
                                <ListGroup as="ul" horizontal className="first mb-3">
                                    <ListGroup.Item as="li">
                                        <Image src={footer4} className="img-fluid" alt="icons1"/>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        <Image src={footer5} className="img-fluid" alt="icons1"/>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        <Image src={footer6} className="img-fluid" alt="icons1"/>
                                    </ListGroup.Item>
                                </ListGroup>   
                                <div className="social-footer-li">
                                    <ListGroup horizontal as="ul">
                                        <ListGroup.Item as="li">
                                            <Link className="nav-link p-0" to="/">
                                                <i className="fa fa-facebook"></i>
                                            </Link>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <Link className="nav-link p-0" to="/">
                                                <i className="fa fa-twitter"></i>
                                            </Link>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <Link className="nav-link p-0" to="/">
                                                <i className="fa fa-instagram"></i>
                                            </Link>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <Link className="nav-link p-0" to="/">
                                                <i className="fa fa-linkedin"></i>
                                            </Link>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <Link className="nav-link p-0" to="/">
                                                <i className="fa fa-youtube"></i>
                                            </Link>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>

            <div className="sub-footer">
                <Container className="d-large-block d-flex justify-content-between align-items-center">
                    <div>
                        <Image src={logo} className="img-fluid" alt="" width="120px"/>
                    </div>
                    <div>
                        <p className="mb-0">Australian Sports Camps © 2020. All Rights Reserved.</p>
                    </div>
                    <div className="mb-0">
                        <ul className="pl-0 mb-0 list-style-none">
                            <li>
                                <Link to="/terms-conditions/" className="uppercase">TERMS & CONDITIONS</Link>
                            </li>
                            <li>
                                <Link to="/asc-privacy-policy/" className="uppercase">PRIVACY POLICY</Link>
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>
            </>
        );
    }
}

export default Footer;