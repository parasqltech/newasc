import React, { Component } from 'react';
import { Link } from 'gatsby'
import {  Container,Col,Row,Card,Image } from 'react-bootstrap'
import card1 from '../../images/card1.png'
import card2 from '../../images/card2.png'
import card3 from '../../images/card3.png'
import card4 from '../../images/card4.png'
import card5 from '../../images/card5.png'
import card6 from '../../images/card6.png'
import card7 from '../../images/card7.png'
import card8 from '../../images/card8.png'
import card9 from '../../images/card9.png'
import card10 from '../../images/card10.png'
import card11 from '../../images/card11.png'
import cardhover from '../../images/card-hover-img.png'
class PartnerSection3 extends Component {

     
    render() {
        return (
            <>
            
            <section className="Sport-section-3">
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
                                <Link to="/Partnerprogramsdetails">Card Title</Link>
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
                                <Link to="/Partnerprogramsdetails">Card Title</Link>
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
                                <Link to="/Partnerprogramsdetails">Card Title</Link>
                            </Card.Body>
                        </Card>


                        <Card  className="listed-card mb-0">
                            <div className="card-img">
                                <div className="inner-card ">
                                    <Image src={cardhover} fluid alt="cardhover"/>
                                </div>
                                <Image variant="top" src={card10} fluid alt="card"/>
                            </div>
                            <Card.Body>
                                <Link to="/Partnerprogramsdetails">Card Title</Link>
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
                                <Link to="/Partnerprogramsdetails">Card Title</Link>
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
                                <Link to="/Partnerprogramsdetails">Card Title</Link>
                            </Card.Body>
                        </Card>

    
                        <Card  className="listed-card mb-0">
                            <div className="card-img">
                                <div className="inner-card ">
                                    <Image src={cardhover} fluid alt="cardhover"/>
                                </div>
                                <Image variant="top" src={card6} fluid alt="card"/>
                            </div>
                            <Card.Body>
                                <Link to="/Partnerprogramsdetails">Card Title</Link>
                            </Card.Body>
                        </Card>


                        <Card  className="listed-card mb-0">
                            <div className="card-img">
                                <div className="inner-card ">
                                    <Image src={cardhover} fluid alt="cardhover"/>
                                </div>
                                <Image variant="top" src={card11} fluid alt="card"/>
                            </div>
                            <Card.Body>
                                <Link to="/Partnerprogramsdetails">Card Title</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} lg={4} md={7} sm={9} xs={10} className="main-listed-card mb-0">
                        <Card  className="listed-card mb-0">
                            <div className="card-img">
                                <div className="inner-card ">
                                    <Image src={cardhover} fluid alt="cardhover"/>
                                </div>
                                <Image variant="top" src={card7} fluid alt="card"/>
                            </div>
                            <Card.Body>
                                <Link to="/Partnerprogramsdetails">Card Title</Link>
                            </Card.Body>
                        </Card>

                        
                        <Card  className="listed-card mb-0">
                            <div className="card-img">
                                <div className="inner-card ">
                                    <Image src={cardhover} fluid alt="cardhover"/>
                                </div>
                                <Image variant="top" src={card8} fluid alt="card"/>
                            </div>
                            <Card.Body>
                                <Link to="/Partnerprogramsdetails">Card Title</Link>
                            </Card.Body>
                        </Card>
                        
                        
                        <Card  className="listed-card mb-0">
                            <div className="card-img">
                                <div className="inner-card ">
                                    <Image src={cardhover} fluid alt="cardhover"/>
                                </div>
                                <Image variant="top" src={card9} fluid alt="card"/>
                            </div>
                            <Card.Body>
                                <Link to="/Partnerprogramsdetails">Card Title</Link>
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

export default PartnerSection3;
