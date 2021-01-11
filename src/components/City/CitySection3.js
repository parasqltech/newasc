import React, { Component } from 'react';
import { Link } from 'gatsby'
import {  Container,Col,Row,Card,Image } from 'react-bootstrap'
import card1 from '../../images/city-card-1.png'
import card2 from '../../images/city-card-2.png'
import card3 from '../../images/city-card-3.png'
import card4 from '../../images/city-card-4.png'
import card5 from '../../images/city-card-5.png'
import card6 from '../../images/city-card-6.png'
import card7 from '../../images/city-card-7.png'
import cardhover from '../../images/card-hover-img.png'

class CitySection3 extends Component {
    render() {
        return (
            <>
            
            <section className="City-section-3">
                <Container>
                    <Row>
                        <Col xl={4} lg={4} md={7} sm={9} xs={10} className="main-listed-card">
                            <Card  className="listed-card mb-0">
                                <div className="card-img">
                                    <div className="inner-card ">
                                        <Image src={cardhover} fluid alt="cardhover"/>
                                    </div>
                                    <Image variant="top" src={card1} fluid alt="card"/>
                                </div>
                                <Card.Body>
                                    <Link to="/Citydetails">Card Title</Link>
                                </Card.Body>
                            </Card>
                            
                            <Card  className="listed-card mb-0">
                                <div className="card-img">
                                    <div className="inner-card ">
                                        <Image src={cardhover} fluid alt="cardhover"/>
                                    </div>
                                    <Image variant="top" src={card2} fluid alt="card"/>
                                </div>
                                <Card.Body>
                                    <Link to="/Citydetails">Card Title</Link>
                                </Card.Body>
                            </Card>

                            <Card  className="listed-card mb-0">
                                <div className="card-img">
                                    <div className="inner-card ">
                                        <Image src={cardhover} fluid alt="cardhover"/>
                                    </div>
                                    <Image variant="top" src={card3} fluid alt="card"/>
                                </div>
                                <Card.Body>
                                    <Link to="/Citydetails">Card Title</Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={4} lg={4} md={7} sm={9} xs={10} className="main-listed-card mb-0">
                            <Card  className="listed-card mb-0">
                                <div className="card-img">
                                    <div className="inner-card ">
                                        <Image src={cardhover} fluid alt="cardhover"/>
                                    </div>
                                    <Image variant="top" src={card4} fluid alt="card"/>
                                </div>
                                <Card.Body>
                                    <Link to="/Citydetails">Card Title</Link>
                                </Card.Body>
                            </Card>

                            <Card  className="listed-card mb-0">
                                <div className="card-img">
                                    <div className="inner-card ">
                                        <Image src={cardhover} fluid alt="cardhover"/>
                                    </div>
                                    <Image variant="top" src={card5} fluid alt="card"/>
                                </div>
                                <Card.Body>
                                    <Link to="/Citydetails">Card Title</Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={4} lg={4} md={7} sm={9} xs={10} className="main-listed-card mb-0">
                            <Card  className="listed-card mb-0">
                                <div className="card-img">
                                    <div className="inner-card ">
                                        <Image src={cardhover} fluid alt="cardhover"/>
                                    </div>
                                    <Image variant="top" src={card6} fluid alt="card"/>
                                </div>
                                <Card.Body>
                                    <Link to="/Citydetails">Card Title</Link>
                                </Card.Body>
                            </Card>
                            
                            <Card  className="listed-card mb-0">
                                <div className="card-img">
                                    <div className="inner-card ">
                                        <Image src={cardhover} fluid alt="cardhover"/>
                                    </div>
                                    <Image variant="top" src={card7} fluid alt="card"/>
                                </div>
                                <Card.Body>
                                    <Link to="/Citydetails">Card Title</Link>
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

export default CitySection3;
