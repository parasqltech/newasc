import React, { Component } from 'react';
import {Container,Col,Row,Card,Image } from 'react-bootstrap'
import { Link } from 'gatsby'
import hero1 from '../../images/hero-1.png'
import hero2 from '../../images/hero-2.png'
import hero3 from '../../images/hero-3.png'
import hero4 from '../../images/hero-4.png'
import hero5 from '../../images/hero-5.png'
import hero6 from '../../images/hero-6.png'
import hero7 from '../../images/hero-7.png'
import hero8 from '../../images/hero-8.png'
import hero9 from '../../images/hero-9.png'
import cardhover from '../../images/card-hover-img.png'

class HeroSection2 extends Component {
   
    
    render() {      
        return (
            <>
            <section className="Hero-section-2">
                <Container>
                    <div className="Hero-Section-2-data">
                        <Row>
                            <Col xl={4} lg={4} md={7} sm={9} xs={10} className="main-listed-card">
                                <Card  className="listed-card mb-0">
                                    <div className="card-img">
                                        <div className="inner-card ">
                                            <Image src={cardhover} fluid alt="cardhover"/>
                                        </div>
                                        <Image variant="top" src={hero1} fluid alt="card"/>
                                    </div>
                                    <Card.Body>
                                        <Link to="/Herodetails">ANGE POSTECOGLOU</Link>
                                    </Card.Body>
                                </Card>

                                
                                <Card  className="listed-card mb-0">
                                    <div className="card-img">
                                        <div className="inner-card ">
                                            <Image src={cardhover} fluid alt="cardhover"/>
                                        </div>
                                        <Image variant="top" src={hero2} fluid alt="card"/>
                                    </div>
                                    <Card.Body>
                                        <Link to="/Herodetails">JESS BIBBY</Link>
                                    </Card.Body>
                                </Card>


                                <Card  className="listed-card mb-0">
                                    <div className="card-img">
                                        <div className="inner-card ">
                                            <Image src={cardhover} fluid alt="cardhover"/>
                                        </div>
                                        <Image variant="top" src={hero3} fluid alt="card"/>
                                    </div>
                                    <Card.Body>
                                        <Link to="/Herodetails">BLAKE HARDWICK</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={4} lg={4} md={7} sm={9} xs={10} className="main-listed-card mb-0">
                                <Card  className="listed-card mb-0">
                                    <div className="card-img">
                                        <div className="inner-card ">
                                            <Image src={cardhover} fluid alt="cardhover"/>
                                        </div>
                                        <Image variant="top" src={hero4} fluid alt="card"/>
                                    </div>
                                    <Card.Body>
                                        <Link to="/Herodetails">JUSTIN LANGER</Link>
                                    </Card.Body>
                                </Card>

                                
                                <Card  className="listed-card mb-0">
                                    <div className="card-img">
                                        <div className="inner-card ">
                                            <Image src={cardhover} fluid alt="cardhover"/>
                                        </div>
                                        <Image variant="top" src={hero5} fluid alt="card"/>
                                    </div>
                                    <Card.Body>
                                        <Link to="/Herodetails">TOM CUSACK</Link>
                                    </Card.Body>
                                </Card>

            
                                <Card  className="listed-card mb-0">
                                    <div className="card-img">
                                        <div className="inner-card ">
                                            <Image src={cardhover} fluid alt="cardhover"/>
                                        </div>
                                        <Image variant="top" src={hero6} fluid alt="card"/>
                                    </div>
                                    <Card.Body>
                                        <Link to="/Herodetails">WASEEM AHMAD</Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={4} lg={4} md={7} sm={9} xs={10} className="main-listed-card mb-0">
                                <Card  className="listed-card mb-0">
                                    <div className="card-img">
                                        <div className="inner-card ">
                                            <Image src={cardhover} fluid alt="cardhover"/>
                                        </div>
                                        <Image variant="top" src={hero7} fluid alt="card"/>
                                    </div>
                                    <Card.Body>
                                        <Link to="/Herodetails">RICHARD DOUGLAS</Link>
                                    </Card.Body>
                                </Card>

                                
                                <Card  className="listed-card mb-0">
                                    <div className="card-img">
                                        <div className="inner-card ">
                                            <Image src={cardhover} fluid alt="cardhover"/>
                                        </div>
                                        <Image variant="top" src={hero8} fluid alt="card"/>
                                    </div>
                                    <Card.Body>
                                        <Link to="/Herodetails">LYNDEN DUNN</Link>
                                    </Card.Body>
                                </Card>
                                
                                
                                <Card  className="listed-card mb-0">
                                    <div className="card-img">
                                        <div className="inner-card ">
                                            <Image src={cardhover} fluid alt="cardhover"/>
                                        </div>
                                        <Image variant="top" src={hero9} fluid alt="card"/>
                                    </div>
                                    <Card.Body>
                                        <Link to="/Herodetails">SHAUN MURPHY</Link>
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

export default HeroSection2;