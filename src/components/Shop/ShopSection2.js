import React, { Component } from 'react';
import { Container,Row,Col,Card,Image} from 'react-bootstrap';
import { Link } from 'gatsby'
import card1 from '../../images/shop-item-1.png'
import card2 from '../../images/shop-item-2.png'
import card3 from '../../images/shop-item-3.png'
import card4 from '../../images/shop-item-4.png'

class ShopSection2 extends Component {

     
    render() {
        return (
            <>
            
            <section className="Shop-section-2">
                <Container>
                    <div className="Shop-section-2-data">
                    <Row className="main-book-card-row">
                        <Col xl={4} lg={4} md={6} sm={9} xs={12} className="main-book-card">
                            <Card className="book-card">
                                <div className="card-img">
                                    <Image variant="top" src={card1} fluid alt="card"/>
                                </div>
                                <Card.Body>
                                    <Card.Title as="h5">
                                        AFL FOOTBALL PACK
                                    </Card.Title>
                                    <ul>
                                        <li className="main-price">$44.50</li>
                                    </ul>
                                    <Link className="nav-link uppercase btn-sm btn-orange text-center" to="/Productdeatils">More info / Book Now</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col xl={4} lg={4} md={6} sm={9} xs={12} className="main-book-card">
                            <Card className="book-card">
                                <div className="card-img">
                                    <Image variant="top" src={card2} fluid alt="card"/>
                                </div>
                                <Card.Body>
                                    <Card.Title as="h5">
                                        CRICKET BALL
                                    </Card.Title>
                                    <ul>
                                        <li className="main-price">$20.00</li>
                                    </ul>
                                    <Link className="nav-link uppercase btn-sm btn-orange text-center" to="/Productdeatils">More info / Book Now</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col xl={4} lg={4} md={6} sm={9} xs={12} className="main-book-card">
                            <Card className="book-card">
                                <div className="card-img">
                                    <Image variant="top" src={card3} fluid alt="card"/>
                                </div>
                                <Card.Body>
                                    <Card.Title as="h5">
                                        Netball
                                    </Card.Title>
                                    <ul>
                                        <li className="main-price">$20.00</li>
                                    </ul>
                                    <Link className="nav-link uppercase btn-sm btn-orange text-center" to="/Productdeatils">More info / Book Now</Link>
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
                                        Soccer.
                                    </Card.Title>
                                    <ul>
                                        <li className="main-price">$20.00</li>
                                    </ul>
                                    <Link className="nav-link uppercase btn-sm btn-orange text-center" to="/Productdeatils">More info / Book Now</Link>
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

export default ShopSection2;
