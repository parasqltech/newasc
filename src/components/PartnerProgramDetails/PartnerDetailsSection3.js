import React, { Component  } from 'react';
import {Container,Image, Row,Col,Card} from 'react-bootstrap'
import { Link } from 'gatsby'
import card1 from '../../images/book-card1.png'
import card2 from '../../images/book-card2.png'
import card3 from '../../images/book-card3.png'
import card4 from '../../images/book-card4.png'

class PartnerDetailsSection3 extends Component {
 
    render() {      
        return (
            <>
            <section className="Sport-details-section-3">
                <Container>
                    <Row className="justify-content-center mb-4">
                        <Col xl={12} lg={12}>
                            <div className="title">
                                <h2>Select your camp below to book online now.</h2>
                            </div>
                        </Col>
                    </Row>

                    <Row className="">
                        <Col xl={4} lg={4} md={6} sm={9} xs={12} className="main-book-card">
                            <Card className="book-card">
                                <div className="card-img">
                                    <Image variant="top" src={card1} fluid alt="card"/>
                                    <div className="tag blue">
                                        New
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Title as="h5">
                                        NSW AFL FOOTBALL CAMP, NORTH RYDE
                                    </Card.Title>
                                    <Card.Text>
                                        30 September & 1, 2 October 2020
                                    </Card.Text>
                                    <Card.Text>
                                        All Saints' College
                                    </Card.Text>
                                    <ul>
                                        <li className="main-price">$315.00</li>
                                    </ul>
                                    <Link className="nav-link uppercase btn-sm btn-orange text-center" to="/">More info / Book Now</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col xl={4} lg={4} md={6} sm={9} xs={12} className="main-book-card">
                            <Card className="book-card">
                                <div className="card-img">
                                    <Image variant="top" src={card2} fluid alt="card"/>
                                    <div className="tag red">
                                        Sold Out
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Title as="h5">
                                        SA AFL FOOTBALL CAMP, MARION
                                    </Card.Title>
                                    <Card.Text>
                                        29, 30 September & 1 October 2020
                                    </Card.Text>
                                    <Card.Text>
                                        Westminster School
                                    </Card.Text>
                                    <ul>
                                        <li className="cross-price">$315.00</li>
                                        <li className="main-price">$221.00</li>
                                    </ul>
                                    <Link className="nav-link uppercase btn-sm btn-orange text-center" to="/">More info / Book Now</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col xl={4} lg={4} md={6} sm={9} xs={12} className="main-book-card">
                            <Card className="book-card">
                                <div className="card-img">
                                    <Image variant="top" src={card3} fluid alt="card"/>
                                    <div className="tag orange">
                                        Group offers
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Title as="h5">
                                        WA AFL FOOTBALL CAMP, CITY BEACH
                                    </Card.Title>
                                    <Card.Text>
                                        7, 8, 9 October 2020
                                    </Card.Text>
                                    <Card.Text>
                                        City Beach Oval
                                    </Card.Text>
                                    <ul>
                                        <li className="main-price">$315.00</li>
                                    </ul>
                                    <Link className="nav-link uppercase btn-sm btn-orange text-center" to="/">More info / Book Now</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col xl={4} lg={4} md={6} sm={9} xs={12} className="main-book-card">
                            <Card className="book-card">
                                <div className="card-img">
                                    <Image variant="top" src={card4} fluid alt="card"/>
                                </div>
                                <Card.Body>
                                    <Card.Title as="h5">
                                        WA AFL FOOTBALL PROGRAM, BULL CREEK
                                    </Card.Title>
                                    <Card.Text>
                                        30 September & 1, 2 October 2020
                                    </Card.Text>
                                    <Card.Text>
                                        All Saints' College
                                    </Card.Text>
                                    <ul>
                                        <li className="main-price">$315.00</li>
                                    </ul>
                                    <Link className="nav-link uppercase btn-sm btn-orange text-center" to="/">More info / Book Now</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            </>
        );
    }
}

export default PartnerDetailsSection3;